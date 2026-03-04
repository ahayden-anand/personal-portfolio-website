import React from 'react';
import { Project, Experience, SkillCategory, Certification, Education, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Hayden Anand",
  role: "Computer Science Engineering Student",
  valueProp: "AI/ML enthusiast and passionate about building intelligent systems and scalable digital solutions. Gaining hands-on experience in web development, machine learning, and problem-solving to create impactful technology.",
  bio: "Computer Science Engineering student at Karunya Institute of Technology and Sciences with a strong foundation in core CS subjects including programming, data structures, and computer science fundamentals. Currently working as an Intern at Inkflow Creative, gaining hands-on experience in full-stack web development and digital operations. Experienced in building and deploying web applications using modern frameworks, with a focus on maintainable code, performance optimization, and learning through iteration and collaboration.",
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
},{
  id: "5",
  title: "Evochat – AI Chatbot",
  problem: "Many users struggle to find fast, reliable, and engaging conversational tools that can assist with everyday questions, productivity, and real-time support. Existing chat systems are often rigid, lack intelligence, or fail to provide meaningful interactions.",
  stack: ["React", "Express.js", "Gemini API"],
  role: "Personal Project",
  impact: "Evochat is an intelligent AI-powered chatbot designed to deliver natural, real-time conversations and personalized responses. It enhances user engagement by providing quick assistance, adaptive interactions, and a scalable backend architecture, making digital communication more efficient and intuitive.",
  githubUrl: "https://github.com/ahayden-anand/evochat-ai.git",
  imageUrl: "./assets/project5.png",
}
,
 {
  id: "3",
  title: "Appointment Management System",
  problem: "Manual appointment scheduling in clinics leads to long wait times, missed appointments, and poor communication between patients and staff.",
  stack: ["React", "Node.js", "Express.js", "MongoDB"],
  role: "Team Lead, Backend Developer",
  impact: "Designed and implemented a full-stack appointment system with real-time status updates and backend validation logic. Built REST APIs to handle concurrent bookings, designed MongoDB schemas for scheduling consistency, and reduced missed appointments through automated notifications and clear status tracking.",
  imageUrl: "./assets/project3.png",
  githubUrl: "https://github.com/ahayden-anand/med-core.git"
},
{
  id: "4",
  title: "Smart Lecture Assitant",
  problem: "Many learners with disabilities face barriers in accessing lecture content due to non-inclusive design, limited accessibility features, and poor content adaptability, making it difficult to learn independently and effectively.",
  stack: ["React", "Express.js", "Node.js","Rest API"],
  role: "Team Lead, Backend Developer",
  impact: "An accessibility-focused learning assistant designed to support people with disabilities by making lecture content easier to access, understand, and interact with. The platform helps reduce learning barriers through inclusive design, simplified navigation, and assistive features that promote independent and equitable education.",
  githubUrl: "https://github.com/ahayden-anand/Smart_Lecture_Assistant.git",
  imageUrl: "./assets/project4.png",
}

,
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
 }
];

export const INTERNSHIP_PROJECTS: Project[] = [
  {
  id: "6",
  title: "Inkflow Creative",
  problem: "Client organization struggled with outdated queue management and inconsistent marketing collaterals negatively impacting customer experience and operational efficiency.",
  stack: ["React", "Node.js", "Express.js", "PostgreSQL", "CSS3"],
  role: "Project Intern - Inkflow Creative (Sept 2025 - Present)",
  impact: "Currently working on multiple digital products as a Project Intern at Inkflow Creative, gaining hands-on experience in digital operations and frontend development. Developing responsive, production-optimized solutions that strengthen the organization's digital presence. Implementing modern UI architecture, responsive layouts, and performance optimizations that improve customer engagement.",
  imageUrl: "./assets/project6.png"
},
  {
  id: "7",
  title: "RoboAiQ",
  problem: "RoboAiQ required a professional digital presence to showcase their robotics platform and educational initiatives focused on empowering future entrepreneurs through innovative technologies.",
  stack: ["React", "CSS3","Typescript","SEO","Responsive Design","Performance Optimization","N8N Integration","Google workflow"],
  role: "Project Intern (Paid – Stipend-Based)",
  impact: "Designed and developed the official website for RoboAiQ as a paid internship project. Implemented SEO best practices, responsive design across all devices, and integrated N8N automation workflows. Successfully strengthened the organization's digital presence and demonstrated ability to deliver production-ready solutions, leading to continued collaboration and future project opportunities.",
  imageUrl: "./assets/project7.png"
}
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "Python", "JavaScript", "Java(Fundamentals)"]
  },
  {
    title: "Web & Frameworks",
    skills: ["React", "Node.js", "Express.js", "HTM!L5", "CSS3", "Tailwind CSS","TypeScript","Bootstrap"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "REST APIs", "MongoDB", "SQL", "VS Code"]
  },
   {
    title: "Soft Skills ",
    skills: ["Public Speaking", "Leadership", "Team-collaboration", "Adaptability"],
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
    imageUrl: "./assets/ibm.png",
    link: "https://www.credly.com/badges/454a1f52-5182-4313-b2ce-523518d69b9d/public_url" 
  },
  { 
    name: "Python for Beginners", 
    issuer: "OpenCV University", 
    date: "2025",
    imageUrl: "./assets/open.png",
    link: "#"
  },
  { 
    name: "Programming in C", 
    issuer: "Infosys Springboard", 
    date: "2025",
    imageUrl: "./assets/infosys.png",
    link: "https://infyspringboard.onwingspan.com"
  },
  { 
    name: "Gemini Certified Student", 
    issuer: "Google AI Education", 
    date: "2025",
    imageUrl: "./assets/gemini.png",
    link: "https://edu.exceedlms.com/student/award/bjnYzXoWBtqZWxPzZ67J43JH"
  },
  { 
    name: "Google Cloud Fundamentals", 
    issuer: "Google Cloud", 
    date: "2025",
    imageUrl: "./assets/google_cloud.png"
  },
  { 
    name: "K12 Certification", 
    issuer: "K12 Education Program", 
    date: "2025",
    imageUrl: "./assets/k12.png"
  },
  { 
    name: "Oracle Certified AI Foundation Associate", 
    issuer: "Oracle", 
    date: "2025",
    imageUrl: "./assets/oracle.png",
    link:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=8D75393FE3A7F8EDA217C12B1B62DE1A66D863B725498B0AE424E6056D4398CD"
  },
   { 
    name: "HTML, CSS, and JavaScript", 
    issuer: "Cisco Networking Academy", 
    date: "2025",
    imageUrl: "./assets/cisco.png"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "RoboAiQ Project Internship - Stipend Award",
    organization: "RoboAiQ",
    date: "2026",
    description: "Successfully completed a paid internship project as a web developer, delivering a production-ready website for RoboAiQ with SEO optimization, responsive design, and N8N workflow integration.",
    highlight: "Earned competitive stipend for professional-grade work on robotics education platform",
    certificateUrl: "./assets/award.png"
  },

];


