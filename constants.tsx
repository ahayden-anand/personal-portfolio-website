
import React from 'react';
import { Project, Experience, SkillCategory, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Hayden Anand",
  role: "Computer Science Engineering Student | Aspiring Software Engineer",
  valueProp: "Building robust foundations in computer science while innovating at the intersection of AI, high-performance web development, and human-centric design.",
  bio: "I am a first-year Computer Science Engineering student at Karunya Institute of Technology and Sciences with a deep-seated interest in engineering scalable systems. My journey is defined by a blend of disciplined academic rigor and a curiosity for emerging technologies. I focus on bridging the gap between theoretical computer science and practical, real-world application, constantly seeking to refine my problem-solving toolkit through active building and community collaboration.",
  email: "ahayden.anand@gmail.com",
  phone: "+91 6380669179",
  linkedIn: "https://linkedin.com/in/haydenanand",
  github: "https://github.com/ahayden-anand",
  avatar: "./assets/profile.png"
};

export const PROJECTS: Project[] = [
  {
  id: "1",
  title: "Personal Portfolio Website",
  problem: "Developers often struggle to present their skills, projects, and experience in a clear, professional, and easily accessible way across devices.",
  stack: ["React", "Tailwind CSS", "TypeScript", "JSX"],
  role: "Frontend Developer",
  impact: "Built a responsive, mobile-first portfolio to showcase projects, skills, and experience in a visually engaging format. Improved personal brand visibility and provided recruiters with a streamlined way to evaluate work and contact details.",
  imageUrl: "./assets/project1.png"
},
  {
    id: "2",
    title: "Restaurant landing page UI",
    problem: "Traditional digital menus lack the high-fidelity branding and interactive feedback required for premium dining.",
    stack: ["HTML5", "CSS3 (Grid/Flex)", "Modern UI Patterns"],
    role: "Product Designer",
    impact: "Built a sophisticated, high-performance web interface featuring complex layout transitions and optimized asset loading, ensuring a seamless luxury experience.",
    imageUrl: "./assets/project2.png",
  },

  {
  id: "3",
  title: "Appointment Scheduling System",
  problem: "Patients often experience long wait times and uncertainty due to inefficient appointment scheduling, lack of real-time updates, and poor communication between clinics and patients.",
  stack: ["React", "Express.js", "Node.js","MongoDB"],
  role: "Team Lead, Backend Developer",
  impact: "Developed a patient-centric appointment system that streamlined scheduling and reduced perceived waiting time by providing real-time appointment status, automated notifications, and optimized backend scheduling logic. Improved transparency and reduced missed appointments through clear status updates and validation flows.",
  imageUrl: "./assets/project3.png",
}

];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core Programming",
    skills: ["C Programming", "Python", "Javascript", "Java (Fundamentals)"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5 / CSS3", "JavaScript", "React", "Tailwind CSS","Bootstrap 5"]
  },
  {
    title: "AI & Tools",
    skills: ["Gemini API", "Git & Version Control", "VS Code"]
  },
  {
    title: "Soft Skills",
    skills: ["Technical Leadership", "Public Speaking", "Analytical Thinking", "Collaborative Development"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Inkflow Creative ",
    role: "Internship Trainee",
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
    id: "e4",
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
