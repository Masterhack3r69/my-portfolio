"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import { projects, caseStudy, skills, contactInfo, testimonials, experience } from "@/lib/data";
import { 
  ExternalLink, 
  Github, 
  Mail, 
  Linkedin, 
  FileText, 
  Code2, 
  Layers, 
  Terminal, 
  Globe,
  ArrowUpRight,
  Menu,
  X,
  Loader2
} from "lucide-react";
import Logo from "./Logo";

export default function PortfolioPage() {
  const [cursorSize, setCursorSize] = useState(20);
  const [isHovering, setIsHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize image loading state
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    projects.forEach(p => {
      initialState[p.id] = true;
    });
    setImageLoading(initialState);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    lenisRef.current?.scrollTo(id, {
      lerp: 0.1,
      duration: 1.5,
    });
  };

  // Smooth mouse spring
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const moveCursor = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }

      mouseX.set(clientX - cursorSize / 2);
      mouseY.set(clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchstart", moveCursor as any);
    window.addEventListener("touchmove", moveCursor as any);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchstart", moveCursor as any);
      window.removeEventListener("touchmove", moveCursor as any);
      lenis.destroy();
    };
  }, []);

  const handleMouseEnter = () => {
      setCursorSize(80);
      setIsHovering(true);
  };
  const handleMouseLeave = () => {
      setCursorSize(20);
      setIsHovering(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake preloader
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans cursor-none selection:bg-white selection:text-black overflow-x-hidden">
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            >
                <div className="relative">
                    <Logo className="w-24 h-24 md:w-32 md:h-32 animate-pulse" />
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-1 bg-white mt-8"
                    />
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference bg-white flex items-center justify-center text-black font-bold text-xs uppercase"
        style={{
          x: cursorX,
          y: cursorY,
          width: cursorSize,
          height: cursorSize,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-8 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="block hover:scale-110 transition-transform duration-300">
             <Logo className="w-12 h-12" />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 font-medium">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, "#about")} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="cursor-none hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            role="link"
            tabIndex={0}
          >
            About
          </a>
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, "#work")} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="cursor-none hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            role="link"
            tabIndex={0}
          >
            Work
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, "#experience")} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="cursor-none hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            role="link"
            tabIndex={0}
          >
            Experience
          </a>
          <a 
            href="#skills" 
            onClick={(e) => scrollToSection(e, "#skills")} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="cursor-none hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            role="link"
            tabIndex={0}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, "#contact")} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="cursor-none hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            role="link"
            tabIndex={0}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="md:hidden cursor-none focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-39 bg-black/95 backdrop-blur-sm border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col gap-4 p-8 font-medium">
              {[
                { label: "About", id: "#about" },
                { label: "Work", id: "#work" },
                { label: "Experience", id: "#experience" },
                { label: "Skills", id: "#skills" },
                { label: "Contact", id: "#contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={(e) => {
                    scrollToSection(e, item.id);
                    setMobileMenuOpen(false);
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="cursor-none hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white text-lg"
                  role="link"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col md:flex-row justify-center items-center px-8 md:px-24 relative overflow-hidden dot-grid text-white/5">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-white">
             <div className="w-[80vw] h-[80vw] border border-white rounded-full animate-spin-slow" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 w-full max-w-7xl text-white">
              <motion.h1 
                 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.8] text-center md:text-left mix-blend-difference"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
              >
                  <span className="text-sm md:text-base font-mono font-normal normal-case tracking-[0.2em] mb-4 block text-neutral-400">Hi I'm</span>
                  John <br />
                  <span className="outline-text text-transparent stroke-white" style={{ WebkitTextStroke: "2px white" }}>Deckson</span>
              </motion.h1>

              <motion.div 
                className="relative w-72 h-72 md:w-[450px] md:h-[450px] shrink-0 overflow-hidden border border-white/20"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05 }}
              >
                  <motion.img 
                    src="/profile-hero.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-all duration-500"
                    onMouseEnter={() => setCursorSize(150)}
                    onMouseLeave={() => setCursorSize(20)}
                  />
              </motion.div>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-24 bg-white overflow-hidden gap-16">
         {/* Dot grid isolated for contrast */}
         <div className="absolute inset-0 dot-grid text-black/5 pointer-events-none" />
         
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 w-full text-black">
             <div className="w-full md:w-1/3 relative">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute -left-8 -top-8 text-neutral-200 font-mono text-sm hidden md:block"
                 >
                    (01) / BIOGRAPHY
                 </motion.div>
                 <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.9]"
                 >
                    About <br /> <span className="text-neutral-400 text-outline" style={{ WebkitTextStroke: "1.5px #a3a3a3" }}>Me</span>
                 </motion.h2>
             </div>
             <div className="w-full md:w-2/3 max-w-2xl">
                 <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight"
                 >
                    {contactInfo.headline}
                 </motion.p>
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-black/10 mt-12"
                 />
             </div>
         </div>
      </section>

      {/* Selected Works (Big Three) */}
      <section id="work" className="min-h-screen bg-black text-white py-24 px-12 dot-grid text-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 text-white">
               <h3 className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8]">PROJECTS</h3>
               <span className="font-mono text-sm mb-4 md:mb-8">(0{projects.length})</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                  <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-white/20 relative group overflow-hidden flex flex-col bg-black/50 backdrop-blur-sm h-full"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                      {/* Loading Skeleton */}
                      <div className="aspect-video overflow-hidden bg-neutral-900 relative">
                        {imageLoading[project.id] && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"
                            animate={{ x: [-1000, 1000] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          />
                        )}
                        <img 
                          src={project.image} 
                          alt={project.title}
                          onLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                          className={cn(
                            "w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0",
                            imageLoading[project.id] ? "opacity-0" : "opacity-50 group-hover:scale-110"
                          )}
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow text-white">
                          <h3 className="text-3xl font-bold uppercase mb-2 focus:outline-none focus:ring-2 focus:ring-white" tabIndex={0}>{project.title}</h3>
                          <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                              {project.techStack.map(tech => (
                                  <span key={tech} className="text-[10px] uppercase tracking-widest border border-white/30 px-2 py-1">{tech}</span>
                              ))}
                          </div>
                          <div className="mt-auto flex gap-4 flex-wrap">
                              {project.liveDemoUrl && (
                                <a 
                                  href={project.liveDemoUrl} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm uppercase tracking-tighter border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
                                  aria-label={`View demo for ${project.title}`}
                                >
                                    Live Demo <ExternalLink size={14} />
                                </a>
                              )}
                              <a 
                                href={project.githubUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm uppercase tracking-tighter border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label={`View GitHub for ${project.title}`}
                              >
                                  GitHub <Github size={14} />
                              </a>
                          </div>
                      </div>
                  </motion.div>
              ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 flex justify-center"
          >
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative px-12 py-4 border border-white/20 hover:border-white transition-colors duration-500 flex items-center gap-3 overflow-hidden focus:outline-none focus:ring-2 focus:ring-white"
              >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 text-sm font-bold uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-500">View More on GitHub</span>
                  <ArrowUpRight className="relative z-10 group-hover:text-black group-hover:rotate-45 transition-all duration-500" size={18} />
              </a>
          </motion.div>
      </section>

      {/* Deep Dive (Case Study) */}
      <section className="min-h-screen bg-white text-black py-24 px-8 md:px-24 flex items-center dot-grid text-black/5">
          <div className="max-w-5xl mx-auto text-black">
              <motion.h3 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] mb-12 focus:outline-none focus:ring-2 focus:ring-black"
                tabIndex={0}
              >
                  Deep <br/> Dive
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                      { label: "The Goal", content: caseStudy.goal },
                      { label: "The Challenge", content: caseStudy.challenge },
                      { label: "The Solution", content: caseStudy.solution, highlight: true }
                  ].map((item, i) => (
                      <motion.div 
                        key={item.label} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        className="space-y-4"
                      >
                          <span className="text-xs font-mono uppercase text-neutral-500">{item.label}</span>
                          <p className={cn("text-lg leading-relaxed", item.highlight && "font-bold italic")}>{item.content}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-black text-white py-24 px-8 md:px-24 dot-grid text-white/5 relative">
          <div className="max-w-7xl mx-auto">
              {/* Giant Title similar to Hero */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] mb-24 text-white select-none"
              >
                  Expe<br/>rience
              </motion.h2>

              <div className="relative border-l border-white/20 ml-4 md:ml-12 space-y-20">
                  {experience.map((exp, idx) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className="relative pl-12 md:pl-24"
                      >
                          {/* Timeline Dot */}
                          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full ring-4 ring-black" />
                          
                          <div className="flex flex-col md:flex-row md:items-baseline gap-6 mb-6">
                              <h3 className="text-4xl md:text-5xl font-black uppercase text-transparent stroke-white outline-text hover:text-white transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: "1px white" }}>
                                  {exp.title}
                              </h3>
                              <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest bg-white/5 px-4 py-1 rounded-full">{exp.period}</span>
                          </div>
                          
                          <div className="md:grid md:grid-cols-12 gap-8">
                                <div className="md:col-span-4 mb-4 md:mb-0">
                                    <p className="text-xl font-bold uppercase mb-2 text-white">{exp.company}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 text-neutral-400">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:col-span-8">
                                    <p className="text-lg text-neutral-400 leading-relaxed font-light">
                                        {exp.description}
                                    </p>
                                </div>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Technical Skills */}
      <section id="testimonials" className="bg-white text-black py-24 px-8 md:px-24 dot-grid text-black/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] text-black"
                >
                    Testi<br/>monials
                </motion.h2>
                <p className="text-xl max-w-sm font-light text-neutral-600 mb-4">
                    Kind words from people I've had the pleasure of working with.
                </p>
             </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, idx) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-neutral-50 p-10 flex flex-col justify-between border border-transparent hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl"
                      >
                          <div className="mb-8">
                              <span className="text-6xl text-neutral-300 font-serif leading-none">"</span>
                              <p className="text-xl leading-relaxed font-medium -mt-6 relative z-10 text-neutral-800">
                                  {testimonial.message}
                              </p>
                          </div>
                          <div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
                               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                   {testimonial.name[0]}
                               </div>
                               <div>
                                   <p className="font-bold text-sm uppercase tracking-wide text-black">{testimonial.name}</p>
                               </div>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>
      <section id="skills" className="bg-black text-white py-24 px-8 md:px-24 dot-grid text-white/5">
          <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] mb-24 focus:outline-none focus:ring-2 focus:ring-white text-white"
                tabIndex={0}
              >
                  Technical<br/><span className="text-outline text-transparent stroke-white" style={{ WebkitTextStroke: "1px white" }}>Skills</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/20 pt-12 text-white">
                      {skills.map((category, idx) => {
                          const Icon = {
                              "Languages": Code2,
                              "Frameworks/Libraries": Layers,
                              "Tools/Backend": Terminal,
                              "Architecture/Cloud": Globe
                          }[category.category] || Code2;

                          return (
                            <motion.div 
                              key={category.category}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: idx * 0.1 }}
                              className="group"
                            >
                                <h4 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                                    <Icon size={14} /> {category.category}
                                </h4>
                                
                                <ul className="space-y-1">
                                    {category.skills.map(skill => (
                                        <li 
                                           key={skill} 
                                           className="text-2xl md:text-3xl font-black uppercase transition-all duration-300 hover:text-neutral-400 cursor-default text-white"
                                        >
                                           <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                                             {skill}
                                           </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                          );
                      })}
              </div>
          </div>
      </section>

      {/* Services Section */}
      <section className="bg-white text-black py-24 border-t border-b border-black overflow-hidden dot-grid text-black/5">
          <div className="overflow-hidden whitespace-nowrap">
              <motion.div 
                 initial={{ x: 0 }}
                 animate={{ x: "-50%" }}
                 transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                 className="flex gap-24 text-[8vw] font-black uppercase text-black"
              >
                  {["Creative Direction", "Web Development", "Brand Identity", "Motion Design", "Creative Direction", "Web Development", "Brand Identity", "Motion Design"].map((service, i) => (
                      <span key={i} className="shrink-0">{service}</span>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 relative overflow-hidden text-center dot-grid text-white/5">
           <div className="absolute inset-0 bg-neutral-900/50" />
           
           <div className="relative z-10 text-white">
                <span className="text-sm font-mono uppercase tracking-widest mb-4 block animate-pulse">Available for work</span>
                <h2 
                  className="text-[12vw] font-black uppercase leading-[0.8] mb-8 cursor-pointer hover:text-outline hover:text-transparent transition-colors duration-300 flex items-center gap-4 justify-center focus:outline-none focus:ring-2 focus:ring-white"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  tabIndex={0}
                  role="heading"
                  aria-level={2}
                >
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-white" aria-label={`Email ${contactInfo.email}`}>
                        Say Hello <ArrowUpRight className="w-[8vw] h-[8vw]" aria-hidden="true" />
                    </a>
                </h2>
                <div className="flex gap-8 justify-center mt-12 flex-wrap" role="list">
                    <a 
                      href={contactInfo.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white" 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                      role="listitem"
                      aria-label="Visit my LinkedIn profile"
                    >
                        <Linkedin size={18} aria-hidden="true" /> LinkedIn
                    </a>
                    <a 
                      href={contactInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white" 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                      role="listitem"
                      aria-label="Visit my GitHub profile"
                    >
                        <Github size={18} aria-hidden="true" /> GitHub
                    </a>
                    <a 
                      href={contactInfo.resumeUrl} 
                      download 
                      className="text-lg uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white" 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                      role="listitem"
                      aria-label="Download my resume PDF"
                    >
                        <FileText size={18} aria-hidden="true" /> Resume PDF
                    </a>
                </div>
           </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black pt-24 pb-12 px-8 md:px-24 dot-grid text-black/5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24 text-black">
                  <div className="space-y-8">
                      <h2 className="text-[12vw] md:text-[6vw] font-black uppercase leading-[0.8] text-black focus:outline-none focus:ring-2 focus:ring-black" tabIndex={0}>
                          Let's <br /> Create
                      </h2>
                      <p className="text-xl max-w-sm text-neutral-600 font-light">
                          Currently based in the Philippines, available for remote collaborations worldwide.
                      </p>
                  </div>

                  <div className="grid grid-cols-2 gap-12 md:gap-24 text-black">
                      <div className="space-y-6 text-black">
                          <span className="text-xs font-mono uppercase text-neutral-400 tracking-widest leading-none">Navigation</span>
                          <nav className="flex flex-col gap-4 text-black" role="navigation" aria-label="Footer navigation">
                              <a 
                                href="#home" 
                                onClick={(e) => scrollToSection(e, "#home")} 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                              >
                                Home
                              </a>
                              <a 
                                href="#about" 
                                onClick={(e) => scrollToSection(e, "#about")} 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                              >
                                About
                              </a>
                              <a 
                                href="#work" 
                                onClick={(e) => scrollToSection(e, "#work")} 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                              >
                                Work
                              </a>
                              <a 
                                href="#contact" 
                                onClick={(e) => scrollToSection(e, "#contact")} 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                              >
                                Contact
                              </a>
                          </nav>
                      </div>
                      <div className="space-y-6 text-black">
                          <span className="text-xs font-mono uppercase text-neutral-400 tracking-widest leading-none">Connect</span>
                          <nav className="flex flex-col gap-4 text-black" role="navigation" aria-label="Social links">
                              <a 
                                href={contactInfo.linkedIn} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                                aria-label="Visit LinkedIn profile"
                              >
                                LinkedIn
                              </a>
                              <a 
                                href={contactInfo.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                                aria-label="Visit GitHub profile"
                              >
                                GitHub
                              </a>
                              <a 
                                href={`mailto:${contactInfo.email}`} 
                                className="text-lg font-bold uppercase hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                                aria-label={`Send email to ${contactInfo.email}`}
                              >
                                Email
                              </a>
                          </nav>
                      </div>
                  </div>
              </div>

              <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8 text-black">
                   <div className="flex items-center gap-4 text-black">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                       <span className="text-xs font-mono uppercase tracking-[0.2em]">Available for projects</span>
                   </div>
                   
                   <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                       &copy; {new Date().getFullYear()} John Deckson — All Rights Reserved
                   </span>

                   <button 
                       onClick={(e) => scrollToSection(e as any, "#home")}
                       className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] hover:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                       aria-label="Scroll back to top"
                   >
                       Back to Top <ArrowUpRight className="group-hover:-rotate-45 transition-transform" size={14} aria-hidden="true" />
                   </button>
              </div>
          </div>
      </footer>
    </div>
  );
}
