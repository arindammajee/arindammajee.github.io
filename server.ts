import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { portfolioData } from "./src/data";

const PORT = 3000;

// Lazy initialization of the Gemini SDK client to prevent startup crashes if key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required for the AI Assistant. Please configure it in your Secrets / Settings.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // 1. API Routes go here FIRST
  
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Fetch portfolio data directly so the frontend can receive it dynamically if needed
  app.get("/api/profile", (req, res) => {
    res.json(portfolioData);
  });

  // AI Portfolio Assistant Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      
      if (!userMessage) {
        return res.status(400).json({ error: "Missing 'userMessage' in request body." });
      }

      // Check if API key is present
      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error: "Gemini API key is not configured in Secrets. Visitors can see the portfolio but cannot chat with the AI Assistant until the GEMINI_API_KEY secret is defined.",
          isDemo: true,
          reply: "Hi! I would love to tell you more about Arindam, but my Gemini brain is currently offline (the developer needs to configure the GEMINI_API_KEY secret in Settings). Here is a quick summary: Arindam is a Full-Stack Software Engineer with expertise in React, TypeScript, Node.js, and MongoDB. Feel free to explore his portfolio pages below!"
        });
      }

      const client = getGeminiClient();

      // Format professional context from portfolioData
      const skillsContext = portfolioData.skills
        .map(s => `- ${s.name} (${s.category} - ${s.level} level)`)
        .join("\n");

      const projectsContext = portfolioData.projects
        .map(p => `- **${p.title}**: ${p.description}\n  Technologies: ${p.technologies.join(", ")}`)
        .join("\n\n");

      const experienceContext = portfolioData.experiences
        .map(e => `- **${e.role}** at ${e.company} (${e.period}):\n  ${e.description.map(d => `  * ${d}`).join("\n")}`)
        .join("\n\n");

      const educationContext = portfolioData.education
        .map(edu => `- **${edu.degree}** from ${edu.institution} (${edu.period}): ${edu.grade || ""}. ${edu.description || ""}`)
        .join("\n");

      const systemInstruction = `You are the personal, highly professional, and friendly AI Assistant for Arindam Majee, a software engineer.
Your purpose is to welcome visitors to his personal website and answer questions about his experience, skills, projects, education, or personality in a polite, engaging, and enthusiastic manner.

Here is Arindam's verified resume and portfolio context:
---
Name: ${portfolioData.name}
Role/Title: ${portfolioData.title}
Tagline: ${portfolioData.tagline}
Bio: ${portfolioData.aboutMe}
Detailed Bio: ${portfolioData.detailedBio}
Location: ${portfolioData.location}
Email: ${portfolioData.email}

Skills Inventory:
${skillsContext}

Notable Projects:
${projectsContext}

Work Experience:
${experienceContext}

Education:
${educationContext}

Social Links & Contact:
${portfolioData.socialLinks.map(s => `- ${s.platform}: ${s.url}`).join("\n")}

Hobbies:
${portfolioData.hobbies.map(h => `- ${h}`).join("\n")}
---

Instructions:
1. Address yourself as Arindam's AI Representative / Assistant.
2. Be direct, welcoming, polite, and enthusiastic. Speak highly of Arindam's expertise and dedication.
3. Keep your answers concise, clear, and highly professional. Limit responses to 2-3 short, scannable paragraphs max.
4. Utilize rich markdown formatting (like bold text, bullets, code fragments) where appropriate.
5. If a visitor asks a question unrelated to Arindam's professional life, answer pleasantly but gently steer the conversation back to his work, or suggest that they reach out to him directly at ${portfolioData.email}.
6. Do NOT invent projects, certifications, or work experience that is not listed in the context. Be honest. If asked about a skill or project not listed, state that Arindam is always excited to learn new things and suggest contacting him at ${portfolioData.email}.
`;

      // Construct conversational request
      // We pass the conversation history
      const formattedHistory = (messages || []).map((msg: any) => ({
        role: msg.role === "user" ? "user" as const : "model" as const,
        parts: [{ text: msg.text }]
      }));

      // Add the new message
      formattedHistory.push({
        role: "user" as const,
        parts: [{ text: userMessage }]
      });

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedHistory,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text || "I couldn't generate a response. Please try again.";
      res.json({ reply: text });

    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({
        error: "Failed to communicate with Gemini API.",
        message: error.message
      });
    }
  });

  // 2. Vite Middleware configuration for Development and Production Static Serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] running on http://localhost:${PORT} with NODE_ENV=${process.env.NODE_ENV || "development"}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
