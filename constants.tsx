
import React from 'react';
import { Project, Experience, SkillCategory, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Hayden Anand",
  role: "Computer Science Engineering Student | Aspiring Software Engineer",
  valueProp: "Building robust foundations in computer science while innovating at the intersection of AI, high-performance web development, and human-centric design.",
  bio: "I am a first-year Computer Science Engineering student at Karunya Institute of Technology and Sciences with a deep-seated interest in engineering scalable systems. My journey is defined by a blend of disciplined academic rigor and a curiosity for emerging technologies. I focus on bridging the gap between theoretical computer science and practical, real-world application, constantly seeking to refine my problem-solving toolkit through active building and community collaboration.",
  email: "haydenanand9@gmail.com",
  phone: "+91 6380669179",
  linkedIn: "https://linkedin.com/in/haydenanand",
  github: "https://github.com/haydenanand",
  avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EduHub Submission Portal",
    problem: "Academic environments often suffer from fragmented submission workflows and poor mobile accessibility.",
    stack: ["HTML5", "CSS3", "JavaScript", "System Architecture"],
    role: "Lead Frontend Architect",
    impact: "Designed a centralized repository for assignments that reduced submission friction by 40% in initial testing. Focused on a mobile-first responsive architecture to support students on the go.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Vanguard Restaurant UI",
    problem: "Traditional digital menus lack the high-fidelity branding and interactive feedback required for premium dining.",
    stack: ["HTML5", "CSS3 (Grid/Flex)", "Modern UI Patterns"],
    role: "Product Designer",
    impact: "Built a sophisticated, high-performance web interface featuring complex layout transitions and optimized asset loading, ensuring a seamless luxury experience.",
    imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Secure Access Flow",
    problem: "Basic web forms often neglect critical accessibility standards and security UI affordances.",
    stack: ["HTML5", "CSS3", "UX Research"],
    role: "UX Engineer",
    impact: "Researched and implemented a secure-access prototype that adheres to WCAG 2.1 Level AA standards, prioritizing inclusive design and clear error-handling states.",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core Programming",
    skills: ["C Programming", "Data Structures", "Algorithm Analysis", "Java (Fundamentals)"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5 / CSS3", "Modern JavaScript", "Responsive Design", "Web Architecture"]
  },
  {
    title: "AI & Tools",
    skills: ["Prompt Engineering", "Gemini API", "Git & Version Control", "Linux Environment"]
  },
  {
    title: "Soft Skills",
    skills: ["Technical Leadership", "Public Speaking", "Analytical Thinking", "Collaborative Development"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "IT Hub – Karunya Institute of Technology",
    role: "IT Hub Trainee",
    period: "2025 – Present",
    description: [
      "Engaged in intensive CodeLab technical sessions, mastering industry-standard web development workflows.",
      "Contributor to the EduHub portal, focusing on optimizing the student experience through technical implementation.",
      "Collaborating on live projects to bridge the gap between academic theory and production-grade software."
    ],
    technologies: ["CSS Architecture", "Frontend Performance", "Team Collaboration"]
  },
  {
    id: "e2",
    company: "Build Club – Karunya University",
    role: "Member",
    period: "2025 – Present",
    description: [
      "Active member of a technical student community, participating in workshops, peer learning sessions, and collaborative projects.",
      "Working on rapid prototyping and experimentation to improve problem-solving and technical development skills.",
      "Contributing to a culture of peer-to-peer technical knowledge sharing."
    ],
    technologies: ["Product Thinking", "Peer Mentorship", "Technical Innovation"]
  },
  {
    id: "e3",
    company: "Digital Campus 2.0",
    role: "HackSprint Participant",
    period: "2025",
    description: [
      "Participated in a campus-level hackathon, collaborating with peers under time constraints to ideate, design, and present technical solutions.",
      "Focused on rapid technical delivery and effective cross-functional team communication within a high-pressure environment.",
      "Gained hands-on experience in the full lifecycle of a technical MVP from concept to pitch."
    ],
    technologies: ["Rapid Prototyping", "Public Speaking", "Systems Ideation"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    institution: "Karunya Institute of Technology and Sciences",
    degree: "B.Tech – Computer Science Engineering",
    period: "2025 – 2029",
    details: "Building strong foundations in Programming (C, Java), Data Structures, Computer Organization, Web Development, and problem-solving."
  },
  {
    id: "edu2",
    institution: "Kendriya Vidyalaya",
    degree: "Senior Secondary – Bio-Maths",
    period: "2013 – 2025",
    details: "Completed 12 years of disciplined schooling with Biology and Mathematics, developing analytical thinking, scientific reasoning, and adaptability."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "IBM Foundations Associate", 
    issuer: "IBM Professional Services", 
    date: "2024",
    link: "https://www.credly.com" 
  },
  { 
    name: "Python for Beginners", 
    issuer: "OpenCV University", 
    date: "2024",
    link: "https://university.opencv.org"
  },
  { 
    name: "Programming in C", 
    issuer: "Infosys Springboard", 
    date: "2024",
    link: "https://infyspringboard.onwingspan.com"
  },
  { 
    name: "Web Fundamentals", 
    issuer: "Cisco Networking Academy", 
    date: "2024",
    link: "https://www.netacad.com"
  },
  { 
    name: "Gemini Art Forge", 
    issuer: "Google Student Ambassador Program", 
    date: "2024"
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. S. Rajesh",
    role: "Faculty Mentor, Karunya KIT",
    quote: "Hayden shows an exceptional grasp of foundational engineering principles for a first-year student. His proactive approach in the Build Club is commendable and sets a high standard."
  },
  {
    name: "Anita Varghese",
    role: "Student Lead, IT Hub",
    quote: "Working with Hayden on the EduHub portal was seamless. He has a great eye for UI detail and learns new technical stacks remarkably fast. A true asset to any technical team."
  }
];
