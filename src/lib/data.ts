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
    id: "project-1",
    title: "Project One Placeholder",
    description: "A high-performance web application focused on scalability and user experience.",
    techStack: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/800/600",
  },
  {
    id: "project-2",
    title: "Project Two Placeholder",
    description: "An innovative solution for real-time data visualization and processing.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io"],
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/800/600",
  },
  {
    id: "project-3",
    title: "Project Three Placeholder",
    description: "A cross-platform mobile application built for efficiency and ease of use.",
    techStack: ["React Native", "Firebase", "Redux", "TypeScript"],
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/800/600",
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
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Zig", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks/Libraries",
    skills: ["React", "Next.js", "Tailwind CSS", "Express"],
  },
  {
    category: "Tools/Backend",
    skills: ["Git", "Docker", "Firebase", "PostgreSQL", "Node.js", "MySQL", "MongoDB"],
  },
  {
    category: "Architecture/Cloud",
    skills: ["REST", "GraphQL", "AWS", "GCP"],
  },
];

export const contactInfo: ContactInfo = {
  headline: "Full-stack developer focused on building scalable, user-centric web applications.",
  email: "hello@example.com",
  linkedIn: "https://linkedin.com/in/username",
  github: "https://github.com/username",
  resumeUrl: "/resume.pdf",
};
