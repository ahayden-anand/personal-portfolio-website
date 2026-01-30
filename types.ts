
export interface Project {
  id: string;
  title: string;
  problem: string;
  stack: string[];
  role: string;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}
