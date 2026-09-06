export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  image: string;
}

// Add projects here when ready. The section stays hidden while this list is empty.
export const projects: Project[] = [];

export const contactInfo = {
  email: "deckson.jd@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jd-edusma",
  github: "https://github.com/Masterhack3r69/",
  resumeUrl: "/John Deckson Edusma CV.pdf",
};

export const experience = [
  {
    id: "djemc-admin",
    title: "System and Network Administrator",
    company: "Don Jose Ecleo Memorial College",
    period: "Jan 2026 — Present",
    description: "Supporting the college’s IT systems and network infrastructure, with a focus on reliable connectivity and day-to-day technology operations.",
    skills: ["System Administration", "Network Administration", "IT Support"],
  },
  {
    id: "full-stack",
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    description: "Building custom web applications and AI integrations, connecting thoughtful front-end experiences with practical back-end solutions.",
    skills: ["Next.js", "React", "TypeScript", "Python", "AI Integration"],
  },
  {
    id: "it-support",
    title: "IT Support",
    company: "Department of Public Works and Highways",
    period: "Mar 2025 — Jul 2025",
    description: "Provided technical assistance for hardware and software issues. Managed network configurations and supported reliable government office operations.",
    skills: ["Technical Support", "Networking", "Hardware Troubleshooting"],
  },
  {
    id: "game-developer",
    title: "Game Developer",
    company: "Freelance",
    period: "2024 — 2025",
    description: "Designed and programmed interactive 2D gameplay, developed custom shaders, and optimized game performance.",
    skills: ["Godot", "GDScript", "C#", "Game Mechanics"],
  },
];

export const skills = [
  { category: "Systems & networks", description: "Keeping everyday technology connected and dependable.", skills: ["System Administration", "Network Configuration", "IT Support", "Hardware Troubleshooting"] },
  { category: "Web development", description: "Building experiences from interface to application logic.", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { category: "Backend & tools", description: "The foundations behind useful, maintainable applications.", skills: ["Node.js", "Python", "Express", "PostgreSQL", "MySQL", "MongoDB", "Git", "Docker"] },
  { category: "Creative development", description: "Exploring interactive ideas and new ways to build.", skills: ["Godot", "GDScript", "Zig", "Game Development", "AI Integration"] },
];
