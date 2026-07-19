export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & Others" | "Design";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  skillsUsed: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors?: string;
  publisher: string;
  date: string;
  url?: string;
  abstract?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  aboutMe: string;
  detailedBio: string;
  email: string;
  location: string;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  publications?: Publication[];
  awards?: Award[];
  socialLinks: SocialLink[];
  hobbies: string[];
}

export interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}
