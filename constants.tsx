
import React from 'react';
import { Project, Experience, SkillCategory, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Hayden Anand",
  role: "Computer Science Engineering Student | Aspiring Software Engineer",
  valueProp: "A Computer Science Engineering student focused on core CS fundamentals, modern web development, and turning academic knowledge into real-world applications.",
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
  imageUrl: "./assets/project1.png",
  liveUrl: "https://ahayden-anand.github.io/personal-portfolio-website/",
  githubUrl: "https://github.com/ahayden-anand/personal-portfolio-website.git"
},
  {
    id: "2",
    title: "Restaurant landing page UI",
    problem: "Traditional digital menus lack the high-fidelity branding and interactive feedback required for premium dining.",
    stack: ["HTML5", "CSS3 (Grid/Flex)", "JavaScript"],
    role: "Product Designer",
    impact: "Built a sophisticated, high-performance web interface featuring complex layout transitions and optimized asset loading, ensuring a seamless luxury experience.",
    imageUrl: "./assets/project2.png",
    liveUrl: "https://ahayden-anand.github.io/Restaurant-Web-UI/",
    githubUrl: "https://github.com/ahayden-anand/Restaurant-Web-UI.git"
  },

  {
  id: "3",
  title: "Appointment Mangement System",
  problem: "Patients often experience long wait times and uncertainty due to inefficient appointment scheduling, lack of real-time updates, and poor communication between clinics and patients.",
  stack: ["React", "Express.js", "Node.js","MongoDB"],
  role: "Team Lead, Backend Developer",
  impact: "Developed a patient-centric appointment system that streamlined scheduling and reduced perceived waiting time by providing real-time appointment status, automated notifications, and optimized backend scheduling logic. Improved transparency and reduced missed appointments through clear status updates and validation flows.",
  imageUrl: "./assets/project3.png",
  githubUrl: "https://github.com/ahayden-anand/med-core.git"
},
 {
  id: "4",
  title: "Smart Lecture Assitant",
  problem: "Many learners with disabilities face barriers in accessing lecture content due to non-inclusive design, limited accessibility features, and poor content adaptability, making it difficult to learn independently and effectively.",
  stack: ["React", "Express.js", "Node.js","MongoDB"],
  role: "Team Lead, Backend Developer",
  impact: "An accessibility-focused learning assistant designed to support people with disabilities by making lecture content easier to access, understand, and interact with. The platform helps reduce learning barriers through inclusive design, simplified navigation, and assistive features that promote independent and equitable education.",
  githubUrl: "https://github.com/ahayden-anand/Smart_Lecture_Assistant.git",
  imageUrl: "./assets/project4.png",
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
    period: "2026 – Present",
    description: [
      "Internship trainee at Inkflow Creative, gaining hands-on experience in web development and design.",
      "Currently building the official website for Inkflow Creative",
      "Collaborating with the team to translate requirements into a production-ready website."
    ],
    technologies: ["CSS Architecture", "Performance Optimization", "Team Collaboration","Frontend Development"]
  },
  {
    id: "e3",
    company: "RoboAIQ",
    role: "Project Intern",
    period: "2026 – Present",
    description: [
      "Project Intern at RoboAIQ, working on AI-driven LMS platform.",
      "Working as a frontend developer to build interactive and user-friendly interfaces for the platform.",
      "Gaining hands-on experience with React and modern web development practices."
    ],
    technologies: ["React", "JavaScript", "UI/UX Design", "Frontend Development"]
  },
  {
    id: "e2",
    company: "Build Club – Karunya University",
    role: "Member",
    period: "2025",
    description: [
      "Active member of a technical student community, participating in workshops, peer learning sessions, and collaborative projects.",
      "Working on rapid prototyping and experimentation to improve problem-solving and technical development skills.",
      "Contributing to a culture of peer-to-peer technical knowledge sharing."
    ],
    technologies: ["Product Thinking", "Peer Mentorship", "Technical Innovation"]
  },
   {
    id: "e3",
    company: "IT Hub",
    role: "IT Hub Trainee",
    period: "2025",
    description: [
      "Trained with technologies and tools to enhance technical skills and industry readiness.  ",
      "Contributor to the EduHub portal, focusing on optimizing the student experience through technical implementation.",
      "Collaborating on live projects to bridge the gap between academic theory and production-grade software."
    ],
    technologies: ["React", "Typescript", "Git","Node.js","Express.js","MongoDB"]
  },

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
    name: "Web Development Fundamentals", 
    issuer: "IBM Professional Services", 
    date: "2025",
    link: "https://www.credly.com/badges/454a1f52-5182-4313-b2ce-523518d69b9d/public_url" 
  },
  { 
    name: "Python for Beginners", 
    issuer: "OpenCV University", 
    date: "2025",
    link: "#"
  },
  { 
    name: "Programming in C", 
    issuer: "Infosys Springboard", 
    date: "2025",
    link: "https://infyspringboard.onwingspan.com"
  },
  { 
    name: "Gemini Certified Student", 
    issuer: "Google AI Education", 
    date: "2025",
    link: "https://edu.exceedlms.com/student/award/bjnYzXoWBtqZWxPzZ67J43JH"
  },
  { 
    name: "Gemini Art Forge", 
    issuer: "Google Student Ambassador Program", 
    date: "2025"
  },
  { 
    name: "Oracle Certified AI Foundation Associate", 
    issuer: "Oracle", 
    date: "2025",
     link:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=8D75393FE3A7F8EDA217C12B1B62DE1A66D863B725498B0AE424E6056D4398CD"
  },
   { 
    name: "HTML, CSS, and JavaScript", 
    issuer: "Cisco Networking Academy", 
    date: "2025",
  }
];

