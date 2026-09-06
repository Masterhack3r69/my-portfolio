"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Menu, X, Network, Code2, Wrench } from "lucide-react";
import { contactInfo, experience, skills, projects } from "@/lib/data";
import Logo from "./Logo";

const navigation = ["About", "Experience", "Skills", "Contact"];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <div id="home">
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header wrap">
        <a href="#home" aria-label="John Deckson home" className="brand"><Logo /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(0, 3).map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
        <button ref={menuButton} className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
          {navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={18}/></a>)}
        </nav>
      </header>

      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> BASED IN THE PHILIPPINES</p>
          <h1 id="hero-title">Behind the code.<br />Beyond the<br /><span className="serif">connection.</span></h1>
          <p className="intro">I’m John Deckson Edusma.</p>
          <p className="hero-description">System &amp; Network Administrator and Full Stack Developer. I build thoughtful digital experiences and keep the systems behind them running.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Get in touch <ArrowUpRight size={18}/></a><a className="text-link" href="#experience">My experience <ArrowDown size={16}/></a></div>
          <div className="hero-footnote"><span>TECHNOLOGY WITH PURPOSE.</span><span>PEOPLE AT THE CENTER.</span></div>
        </div>
        <div className="portrait-panel">
          <Image src="/portrait.jpg" alt="John Deckson Edusma wearing glasses and a charcoal shirt" fill priority sizes="(max-width: 760px) 100vw, 45vw" className="portrait" />
          <span className="portrait-index">A LITTLE INTRODUCTION / 01</span>
          <div className="portrait-caption"><div><span>CURRENTLY AT</span><p>Don Jose Ecleo<br/>Memorial College</p></div><ArrowUpRight size={30} strokeWidth={1}/></div>
        </div>
      </section>
      <div className="specialty-strip"><div className="wrap"><span>Systems &amp; networks</span><span className="asterisk">✳</span><span>Full stack development</span><span className="asterisk">✳</span><span>Practical problem solving</span></div></div>

      <section id="about" className="section wrap about-section">
        <div className="section-label"><span>01 / ABOUT ME</span><h2>A builder’s mindset.<br/><span className="serif">A human approach.</span></h2></div>
        <div className="about-copy"><p className="lead">Good technology should make everyday life a little easier.</p><p>My work connects two sides of technology: creating applications people enjoy using, and supporting the infrastructure they depend on. From a user interface to a network connection, I care about how the whole experience comes together.</p><p>I’m currently a System and Network Administrator at Don Jose Ecleo Memorial College, while continuing to explore web development and build with curiosity.</p><a className="text-link" href={contactInfo.resumeUrl} download>Download my résumé <ArrowUpRight size={17}/></a></div>
        <div className="focus-grid">{[{icon: Network, title: "Keep things connected", text: "Systems, networks, and the everyday reliability people depend on."}, {icon: Code2, title: "Build with intention", text: "Front end to back end, turning ideas into useful web applications."}, {icon: Wrench, title: "Make technology work", text: "Hands-on troubleshooting with a practical, people-first approach."}].map(({icon: Icon, title, text}) => <article className="focus-card" key={title}><Icon size={24} strokeWidth={1.4}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="experience" className="experience-section section"><div className="wrap"><div className="section-heading"><div className="section-label"><span>02 / THE JOURNEY</span><h2>Learning by doing.<br/><span className="serif">Growing with every role.</span></h2></div><p>From building applications to supporting the systems that make work possible.</p></div><div className="experience-list">{experience.map((job, index) => <article className={`experience-row ${index === 0 ? "current-role" : ""}`} key={job.id}><div className="experience-date"><span>{job.period}</span>{index === 0 && <span className="current-badge"><span className="status-dot"/>CURRENT ROLE</span>}</div><div><h3>{job.title}</h3><p className="company">{job.company}</p><p className="job-description">{job.description}</p><div className="tags">{job.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div><span className="role-index">0{index + 1}</span></article>)}</div></div></section>

      <section id="skills" className="section wrap"><div className="section-heading"><div className="section-label"><span>03 / MY TOOLKIT</span><h2>The tools behind<br/><span className="serif">the thinking.</span></h2></div><p>A mix of development tools and hands-on technical skills, always with room to learn.</p></div><div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.category}><span className="skill-number">0{index + 1}</span><h3>{group.category}</h3><p>{group.description}</p><div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

      {projects.length > 0 && <section id="projects" className="section wrap"><div className="section-label"><span>SELECTED WORK</span><h2>A few things I’ve built.</h2></div><div className="project-grid">{projects.map(project => <article className="focus-card" key={project.id}><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div>{project.liveDemoUrl && <a className="text-link" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={16}/></a>}{project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source code <ArrowUpRight size={16}/></a>}</article>)}</div></section>}

      <section id="contact" className="contact-section"><div className="wrap"><p className="eyebrow">04 / START A CONVERSATION</p><div className="contact-heading"><h2>Have something<br/><span className="serif">in mind?</span></h2><a className="contact-arrow" href={`mailto:${contactInfo.email}`} aria-label="Email John Deckson"><ArrowUpRight strokeWidth={1} /></a></div><div className="contact-bottom"><p>A project, an idea, or just a hello.<br/>I’d love to hear from you.</p><a className="email-link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}<ArrowUpRight size={22}/></a></div></div></section>
      <footer className="wrap footer"><a className="brand" href="#home" aria-label="John Deckson home"><Logo /></a><span>© {new Date().getFullYear()} John Deckson Edusma</span><div><a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a><a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href="#home">Back to top ↑</a></div></footer>
    </div>
  );
}
