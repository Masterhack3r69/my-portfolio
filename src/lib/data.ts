export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  image: string; // Screenshot or GIF
}

export interface CaseStudy {
  goal: string;
  challenge: string;
  solution: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface ContactInfo {
  headline: string;
  email: string;
  linkedIn: string;
  github: string;
  resumeUrl: string;
}

export const projects: Project[] = [
  {
    id: "quiz-ai",
    title: "AI Quiz Generator",
    description: "An AI-powered platform that automatically generates high-quality quiz questions from various content sources (PDFs, videos, web pages, text). Features multi-agent AI verification and instant grading.",
    techStack: ["Next.js 16", "React 19", "MongoDB", "AI", "Tailwind CSS 4", "Framer Motion"],
    liveDemoUrl: "",
    githubUrl: "https://github.com/Masterhack3r69/QUIZ_AI",
    image: "/quiz-ai-record.gif",
  },
  {
    id: "multi-branch-pos",
    title: "Multi-Branch POS System",
    description: "A comprehensive Point of Sale system designed for retail businesses with multiple branches, featuring real-time inventory tracking, offline capability, and role-based access control.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Zustand", "IDB"],
    liveDemoUrl: "",
    githubUrl: "#",
    image: "/pos-record.gif",
  },
  {
    id: "resume-checker-ai",
    title: "Resume Checker AI",
    description: "AI-powered resume analysis engine using Google Gemini and ChromaDB. Features a 7-point recruiter heuristic check and skill verification via vector embeddings.",
    techStack: ["Python", "React", "FastAPI", "AI", "ChromaDB", "PyQt6"],
    liveDemoUrl: "",
    githubUrl: "https://github.com/Masterhack3r69/Resume-Checker-AI",
    image: "/resume_record.gif",
  },
];

export const caseStudy: CaseStudy = {
  goal: "The goal was to create a seamless, real-time synchronization engine for collaborative editing.",
  challenge: "Handling concurrent edits and race conditions without sacrificing system performance.",
  solution: "I implemented an Operational Transformation (OT) algorithm and optimized database queries, reducing sync latency by 45%.",
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    description: "The core syntax and logic that power my applications.",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Zig", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks/Libraries",
    description: "Modern tools used to build robust and scalable front-end and back-end systems.",
    skills: ["React", "Next.js", "Tailwind CSS", "Express"],
  },
  {
    category: "Tools/Backend",
    description: "DevOps and storage solutions for efficient deployment and data management.",
    skills: ["Git", "Docker", "Firebase", "PostgreSQL", "Node.js", "MySQL", "MongoDB"],
  },
  {
    category: "Architecture/Cloud",
    description: "Systems design and cloud integration for high availability.",
    skills: ["REST", "GraphQL", "AWS", "GCP"],
  },
];

export const contactInfo: ContactInfo = {
  headline: "I’m a Full Stack Developer who enjoys creating modern web applications. I work on both the front end and back end, bringing ideas to life through clean code and thoughtful design. I’m passionate about learning new technologies and building products that people actually enjoy using.",
  email: "hello@example.com",
  linkedIn: "linkedin.com/in/jd-edusma",
  github: "https://github.com/Masterhack3r69/",
  resumeUrl: "/resume.pdf",
};
