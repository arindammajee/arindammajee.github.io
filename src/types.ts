export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & Others" | "Design";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
}

// Skills grouped for the redesigned, category-based Skills section.
export interface SkillGroup {
  category: string;
  items: string[];
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

// A problem-focused "Featured Work" card: emphasizes the class of problem
// solved and the outcome, not the employer.
export interface FeaturedWork {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  outcome: string;
  link?: { label: string; url: string };
}

// A long-term research direction, written as a short narrative.
export interface ResearchArea {
  id: string;
  title: string;
  description: string;
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
  venue?: string;
  date: string;
  year: string;
  type?: "Journal" | "Conference" | "Book Chapter" | "Preprint";
  firstAuthor?: boolean;
  abstract?: string;
  links?: {
    pdf?: string;
    doi?: string;
    bibtex?: string;
    code?: string;
  };
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

// A writing entry. `comingSoon` renders the placeholder state for the
// Writing section until real articles are published.
export interface WritingEntry {
  id: string;
  title: string;
  summary: string;
  date?: string;
  url?: string;
  comingSoon?: boolean;
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
  headline: string;
  subtitle: string;
  aboutMe: string;
  detailedBio: string;
  email: string;
  location: string;
  resumeUrl?: string;
  skills: Skill[];
  skillGroups: SkillGroup[];
  featuredWork: FeaturedWork[];
  researchAreas: ResearchArea[];
  researchStatement: string;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  publications?: Publication[];
  awards?: Award[];
  writing: WritingEntry[];
  socialLinks: SocialLink[];
  hobbies: string[];
}
