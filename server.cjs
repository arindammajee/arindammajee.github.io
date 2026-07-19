var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");

// src/data.ts
var portfolioData = {
  name: "Arindam Majee",
  title: "SDE-I @ Amazon India",
  tagline: "SDE-I at Amazon India | AI/ML Researcher | Specializing in CV, RL, Robotics, LLMs & Graphs",
  aboutMe: "Highly proficient Software Development Engineer with 2+ years of experience building and scaling mission-critical, high-throughput automation systems for the world's largest logistics networks. My expertise is centered on distributed systems, optimizing MLOps pipelines, and cloud infrastructure management.",
  detailedBio: "I am a Software Development Engineer - I (SDE-I) at Amazon India, Bangalore. Earlier, I worked as a Research Assistant in the Institute of Advancing Intelligence at TCG CREST with Prof. Swagatam Das. I graduated with First Class Distinction with Honours in Electronics and Telecommunication Engineering from Jadavpur University, Kolkata. My undergraduate thesis was on object tracking using reinforcement learning from 2D videos under the guidance of Prof. Amit Konar and Dr. Pratyusha Rakshit. During my undergraduate studies, I also conducted robotics research at Toronto Metropolitan University (sponsored by MITACS) and worked as a research intern on diverse intelligent automation projects.",
  email: "majeearindam06072002@gmail.com",
  location: "Bengaluru, Karnataka, India",
  skills: [
    { name: "Python", category: "Backend", level: "Expert" },
    { name: "C++", category: "Backend", level: "Expert" },
    { name: "Java", category: "Backend", level: "Expert" },
    { name: "Node.js (Express)", category: "Backend", level: "Advanced" },
    { name: "SQL", category: "Backend", level: "Advanced" },
    { name: "AWS (AppConfig, CloudWatch)", category: "Tools & Others", level: "Expert" },
    { name: "Containerization (Docker)", category: "Tools & Others", level: "Expert" },
    { name: "TensorFlow & PyTorch", category: "Tools & Others", level: "Expert" },
    { name: "Git & GitHub CI/CD", category: "Tools & Others", level: "Advanced" },
    { name: "MATLAB", category: "Tools & Others", level: "Advanced" },
    { name: "Linux", category: "Tools & Others", level: "Advanced" },
    { name: "Distributed Systems", category: "Design", level: "Expert" },
    { name: "MLOps Pipelines", category: "Design", level: "Expert" },
    { name: "Computer Vision (CV)", category: "Design", level: "Expert" },
    { name: "Reinforcement Learning (RL)", category: "Design", level: "Expert" },
    { name: "Knowledge Graphs", category: "Design", level: "Advanced" },
    { name: "Robotics & Automation", category: "Design", level: "Advanced" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Alzheimer's Disease Detection from MRI",
      description: "An AI-based diagnostic assistant using deep learning to identify Alzheimer's disease patterns from brain MRI scans.",
      longDescription: "Developed an advanced deep learning framework designed to analyze MRI scans for the early and precise detection of Alzheimer's Disease. Leveraging customized 3D Convolutional Neural Network (CNN) architectures, the system extracts subtle structural degeneration markers from brain scans to assist medical professionals in early clinical diagnosis.",
      technologies: ["Python", "PyTorch", "Deep Learning", "CNN", "Medical Image Processing", "MRI Analysis"],
      featured: true
    },
    {
      id: "proj-2",
      title: "Line Follower Bot with PID Control",
      description: "An autonomous robotics platform using proportional-integral-derivative feedback loops for highly stable track following.",
      longDescription: "Designed and built an autonomous line follower robot utilizing high-frequency Proportional-Integral-Derivative (PID) feedback control. Calibrated infrared sensor arrays and motor controller drivers for smooth navigation around tight curves and varying track conditions. Developed in connection with Jadavpur University.",
      technologies: ["C++", "PID Tuning", "Arduino", "Robotics", "PID Feedback Control", "Hardware Integration"],
      featured: true
    },
    {
      id: "proj-3",
      title: "Reinforcement Learning Object Tracking",
      description: "An autonomous computer vision tracker trained using state-of-the-art Deep Q-Networks (DQN) in a custom virtual environment.",
      longDescription: "Undergraduate thesis project centered on teaching artificial agents to dynamically track target objects in complex 2D videos. Implemented reinforcement learning algorithms (deep reinforcement learning) where the camera/tracker agent optimizes its bounding box position via reward signals, outperforming conventional rule-based visual tracking frameworks.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Computer Vision", "OpenAI Gym", "Q-Learning"],
      featured: true
    },
    {
      id: "proj-4",
      title: "COVID-19 Detection from CT Scans",
      description: "A binary and multi-class medical diagnostic classifier built on custom convolutional neural networks for CT scan evaluation.",
      longDescription: "Engineered and validated custom convolutional neural network (CNN) architectures to classify chest and brain CT scan images for rapid COVID-19 screening. Evaluated dataset class imbalances, applied strategic data augmentations, and analyzed model decisions using visual activation mapping.",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "Medical Imaging"],
      featured: false
    }
  ],
  experiences: [
    {
      id: "exp-1",
      company: "Amazon",
      role: "Software Development Engineer - I",
      period: "Jan 2024 - Present",
      location: "Bangalore, India \xB7 On-site",
      description: [
        "Drove $32M+ Annualized Cost Efficiency by designing and implementing a highly configurable, multi-zone package sorting functionality across over 150 delivery stations.",
        "Engineered mission-critical, high-throughput backend services handling massive scale logistics and package routing pipelines.",
        "Monitored, optimized, and maintained cloud infrastructure deployments utilizing AWS services, including AppConfig, CloudWatch, and auto-scaling microservices."
      ],
      skillsUsed: ["Java", "Distributed Systems", "AWS", "Containerization", "Microservices"]
    },
    {
      id: "exp-2",
      company: "TCG CREST (Institute of Advancing Intelligence)",
      role: "Research Assistant (Full-time)",
      period: "Jun 2023 - Jan 2024",
      location: "Kolkata, West Bengal, India \xB7 On-site",
      description: [
        "Worked as a full-time Research Assistant in the Institute of Advancing Intelligence (IAI) under the supervision of leading AI scientist Prof. Swagatam Das.",
        "Formulated and implemented advanced mathematical optimization models and deep neural network designs.",
        "Conducted research on machine learning algorithms, reinforcement learning, and graph-structured representation learning."
      ],
      skillsUsed: ["Python", "Machine Learning", "Deep Learning", "Graph Neural Networks", "Optimization Algorithms"]
    },
    {
      id: "exp-3",
      company: "Indian Statistical Institute (ISI), Kolkata",
      role: "Research Assistant (Part-time)",
      period: "May 2023 - Jan 2024",
      location: "Kolkata, West Bengal, India \xB7 On-site",
      description: [
        "Conducted artificial intelligence research on complex Knowledge Graphs, semantic modeling, and reasoning algorithms.",
        "Coauthored reports and structured research publications explaining node embeddings and path search strategies."
      ],
      skillsUsed: ["Python", "Knowledge Graphs", "Machine Learning"]
    },
    {
      id: "exp-4",
      company: "Jadavpur University",
      role: "Undergraduate Student Researcher",
      period: "Jul 2020 - Jul 2023",
      location: "Kolkata, West Bengal, India \xB7 On-site",
      description: [
        "Conducted academic research and developed innovative biomedical machine learning projects.",
        "Published high-impact papers in reputed medical informatics venues covering cardiovascular and cancer diagnosis.",
        "Designed and tuned metaheuristic optimization algorithms (like Moth-Flame Optimization and Dragonfly Algorithm) to perform optimal feature selection on medical datasets."
      ],
      skillsUsed: ["Python", "TensorFlow", "MATLAB", "SQL", "Feature Selection", "Metaheuristics"]
    },
    {
      id: "exp-5",
      company: "Toronto Metropolitan University",
      role: "Research Intern (MITACS)",
      period: "May 2022 - Aug 2022",
      location: "Toronto, Ontario, Canada \xB7 Virtual",
      description: [
        "Conducted international research sponsored by the prestigious MITACS program at the Robotics, Mechatronics, and Automation Laboratory (RMAL).",
        "Developed reinforcement learning agent models for robotic path tracking and 2D visual object tracking from video frames."
      ],
      skillsUsed: ["Python", "PyTorch", "Reinforcement Learning", "Robotics", "Computer Vision"]
    },
    {
      id: "exp-6",
      company: "Edufeat",
      role: "Subject Matter Expert",
      period: "Apr 2021 - Jun 2023",
      location: "Remote \xB7 Part-time",
      description: [
        "Delivered technical support and expert solutions in computer science, software engineering, and algorithmic problems.",
        "Formulated clean, well-documented code examples and explanation guides for students in Python, C++, and Java."
      ],
      skillsUsed: ["Problem Solving", "C++", "Python", "Java", "Data Structures"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Jadavpur University",
      degree: "Bachelor of Engineering - BE (Hons), Electronics and Telecommunication Engineering",
      period: "Jul 2019 - May 2023",
      grade: "CGPA: 9/10 (86.12%)",
      description: "Graduated with First Class Distinction with Honours. Completed undergraduate thesis on object tracking using reinforcement learning from 2D videos under the guidance of Prof. Amit Konar and Dr. Pratyusha Rakshit."
    },
    {
      id: "edu-2",
      institution: "Talajuri Srimati High School",
      degree: "Higher Secondary (10+2) in Science (WBCHSE)",
      period: "2017 - 2019",
      grade: "92.6%",
      description: "Studied physics, chemistry, mathematics, computer science, Bengali, and English. Graduated with exceptional marks."
    }
  ],
  publications: [
    {
      id: "pub-1",
      title: "Moth-Flame Optimization-Based Deep Feature Selection for Cardiovascular Disease Detection Using ECG Signal",
      publisher: "CRC Press",
      date: "Jun 20, 2022",
      authors: "Arindam Majee, etc.",
      abstract: "Designed a hybrid metaheuristic deep learning architecture that applies Moth-Flame Optimization to perform feature selection on ECG signal indicators, achieving highly accurate cardiovascular disease detection."
    },
    {
      id: "pub-2",
      title: "Breast Cancer Detection from Thermal Images using Grunwald-Letnikov aided Dragonfly Algorithm based Deep Feature Selection Method",
      publisher: "Computer in Biology and Medicine",
      date: "Nov 14, 2021",
      authors: "Arindam Majee, etc.",
      abstract: "Formulated a deep feature selection mechanism utilizing a Grunwald-Letnikov fractional derivative-aided Dragonfly metaheuristic algorithm to identify malignancy markers in breast thermal scan datasets."
    }
  ],
  awards: [
    {
      id: "aw-1",
      title: "JBNSTS Senior Research Scholarship",
      issuer: "Jagadish Bose National Science Talent Search",
      date: "Dec 2019",
      description: "Highly competitive research scholarship awarded annually to the top ~60 meritorious science and engineering undergraduate students in the state of West Bengal. Associated with Jadavpur University."
    },
    {
      id: "aw-2",
      title: "JBNSTS Junior Scholar",
      issuer: "Jagadish Bose National Science Talent Search",
      date: "Dec 2017",
      description: "Scholarship awarded for academic excellence during high school studies, following a state-wide talent selection assessment."
    }
  ],
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/arindammajee", label: "LinkedIn Connect" },
    { platform: "GitHub", url: "https://github.com/arindammajee", label: "GitHub Profile" },
    { platform: "Twitter", url: "https://twitter.com/arindammajee", label: "Twitter Feed" },
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Arindam+Majee", label: "Google Scholar" },
    { platform: "ResearchGate", url: "https://www.researchgate.net/profile/Arindam-Majee", label: "ResearchGate Profile" },
    { platform: "Email", url: "mailto:majeearindam06072002@gmail.com", label: "Send Email" }
  ],
  hobbies: [
    "Machine Learning Research",
    "Competitive Programming",
    "Robotics & Hardware Hacking",
    "Writing Scientific Technical Articles",
    "Exploring Advanced Distributed Architectures"
  ]
};

// server.ts
var PORT = 3e3;
var aiClient = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required for the AI Assistant. Please configure it in your Secrets / Settings.");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.get("/api/profile", (req, res) => {
    res.json(portfolioData);
  });
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      if (!userMessage) {
        return res.status(400).json({ error: "Missing 'userMessage' in request body." });
      }
      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error: "Gemini API key is not configured in Secrets. Visitors can see the portfolio but cannot chat with the AI Assistant until the GEMINI_API_KEY secret is defined.",
          isDemo: true,
          reply: "Hi! I would love to tell you more about Arindam, but my Gemini brain is currently offline (the developer needs to configure the GEMINI_API_KEY secret in Settings). Here is a quick summary: Arindam is a Full-Stack Software Engineer with expertise in React, TypeScript, Node.js, and MongoDB. Feel free to explore his portfolio pages below!"
        });
      }
      const client = getGeminiClient();
      const skillsContext = portfolioData.skills.map((s) => `- ${s.name} (${s.category} - ${s.level} level)`).join("\n");
      const projectsContext = portfolioData.projects.map((p) => `- **${p.title}**: ${p.description}
  Technologies: ${p.technologies.join(", ")}`).join("\n\n");
      const experienceContext = portfolioData.experiences.map((e) => `- **${e.role}** at ${e.company} (${e.period}):
  ${e.description.map((d) => `  * ${d}`).join("\n")}`).join("\n\n");
      const educationContext = portfolioData.education.map((edu) => `- **${edu.degree}** from ${edu.institution} (${edu.period}): ${edu.grade || ""}. ${edu.description || ""}`).join("\n");
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
${portfolioData.socialLinks.map((s) => `- ${s.platform}: ${s.url}`).join("\n")}

Hobbies:
${portfolioData.hobbies.map((h) => `- ${h}`).join("\n")}
---

Instructions:
1. Address yourself as Arindam's AI Representative / Assistant.
2. Be direct, welcoming, polite, and enthusiastic. Speak highly of Arindam's expertise and dedication.
3. Keep your answers concise, clear, and highly professional. Limit responses to 2-3 short, scannable paragraphs max.
4. Utilize rich markdown formatting (like bold text, bullets, code fragments) where appropriate.
5. If a visitor asks a question unrelated to Arindam's professional life, answer pleasantly but gently steer the conversation back to his work, or suggest that they reach out to him directly at ${portfolioData.email}.
6. Do NOT invent projects, certifications, or work experience that is not listed in the context. Be honest. If asked about a skill or project not listed, state that Arindam is always excited to learn new things and suggest contacting him at ${portfolioData.email}.
`;
      const formattedHistory = (messages || []).map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
      }));
      formattedHistory.push({
        role: "user",
        parts: [{ text: userMessage }]
      });
      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedHistory,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });
      const text = response.text || "I couldn't generate a response. Please try again.";
      res.json({ reply: text });
    } catch (error) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({
        error: "Failed to communicate with Gemini API.",
        message: error.message
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] running on http://localhost:${PORT} with NODE_ENV=${process.env.NODE_ENV || "development"}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
//# sourceMappingURL=server.cjs.map
