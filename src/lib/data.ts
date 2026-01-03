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

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
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
    githubUrl: "https://github.com/Masterhack3r69/Multi-Branch-POS-System",
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
  goal: "To create an AI platform that instantly turns educational materials like PDFs and videos into high-quality, randomized quizzes. Enable educators to focus on teaching rather than assessment creation.",
  challenge: "Building a system that could reliably extract concepts from diverse content types, generate pedagogically sound questions, prevent cheating, and scale across multiple institutions while maintaining data security and quick response times.",
  solution: "Architected a multi-agent AI system using Next.js 16 and MongoDB with intelligent question verification. Implemented role-based access control, real-time grading with anti-cheat detection, and optimized the AI pipeline to reduce latency from 45s to under 3s per quiz.",
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    description: "The core syntax and logic that power my applications.",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "GDScript", "Zig", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks/Libraries",
    description: "Modern tools used to build robust and scalable front-end and back-end systems.",
    skills: ["React", "Next.js", "Tailwind CSS", "Express", "Godot"],
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
  email: "deckson.jd@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jd-edusma",
  github: "https://github.com/Masterhack3r69/",
  resumeUrl: "/John Deckson Edusma CV.pdf",
};
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Jamuel V.",
    message: "So glad I found Deckson. They did a great job and were very easy to talk to. Everything looks perfect!",
  },
  {
    id: "testimonial-2",
    name: "April N.",
    message: "It was a pleasure working with Deckson. They actually listen to what you want and get it done right.",
  },
  {
    id: "testimonial-3",
    name: "Barangay's Official",
    message: "Really happy with the results! Deckson is reliable, friendly, and does high-quality work. 10/10.",
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Delivering custom web and AI solutions for diverse clients. Specializing in high-performance web applications and intelligent system integrations.",
    skills: ["Next.js", "React", "TypeScript", "Python", "AI Integration", "Full Stack Development"],
  },
  {
    id: "exp-2",
    title: "IT Support",
    company: "Department of Public Works and Highways",
    period: "March 2025 - July 2025",
    description: "Provided technical assistance for hardware and software issues. Managed network configurations and ensured system reliability for government office operations.",
    skills: ["Technical Support", "Network Administration", "Hardware Troubleshooting", "System Maintenance"],
  },
  {
    id: "exp-3",
    title: "Game Developer",
    company: "Freelance",
    period: "2024 - 2025",
    description: "Designed and programmed interactive 2D gameplay mechanics. Developed custom shaders and optimized game performance for various platforms.",
    skills: ["Godot", "GDScript", "Game Mechanics", "C#", "Level Design"],
  }
];