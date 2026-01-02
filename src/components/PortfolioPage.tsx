"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import { projects, caseStudy, skills, contactInfo } from "@/lib/data";

export default function PortfolioPage() {
  const [cursorSize, setCursorSize] = useState(20);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      lenis.destroy();
    };
  }, [cursorSize, mouseX, mouseY]);

  const handleMouseEnter = () => {
      setCursorSize(80);
      setIsHovering(true);
  };
  const handleMouseLeave = () => {
      setCursorSize(20);
      setIsHovering(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans cursor-none selection:bg-black selection:text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference bg-white flex items-center justify-center text-black font-bold text-xs uppercase"
        style={{
          x: cursorX,
          y: cursorY,
          width: cursorSize,
          height: cursorSize,
        }}
      >
        <AnimatePresence>
            {isHovering && (
                <motion.span 
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0 }}
                >
                    View
                </motion.span>
            )}
        </AnimatePresence>
      </motion.div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-bold text-lg uppercase tracking-tight">Kinetic</div>
         <nav className="flex gap-12 font-medium">
             <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-none">Work</span>
             <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-none">Play</span>
         </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-8 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
             <div className="w-[80vw] h-[80vw] border border-black rounded-full animate-spin-slow" />
          </div>

          <motion.h1 
             className="text-[12vw] font-black uppercase leading-[0.8] text-center mix-blend-difference text-white z-10"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
          >
              Move <br />
              <span className="outline-text text-transparent stroke-white" style={{ WebkitTextStroke: "2px white" }}>Fast</span>
          </motion.h1>
      </section>

      {/* About Section */}
      <section className="min-h-[50vh] flex items-center justify-center px-8 py-24 bg-black text-white">
         <div className="max-w-4xl text-center">
             <p className="text-xl md:text-3xl font-light leading-relaxed">
                {contactInfo.headline}
             </p>
         </div>
      </section>

      {/* Selected Works (Big Three) */}
      <section className="min-h-screen bg-black text-white py-24 px-12">
          <div className="flex justify-between items-end mb-12">
               <h3 className="text-6xl font-black uppercase">The Big Three</h3>
               <span className="font-mono text-sm">(0{projects.length})</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                  <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-white/20 relative group overflow-hidden flex flex-col"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                          <h3 className="text-3xl font-bold uppercase mb-2">{project.title}</h3>
                          <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                              {project.techStack.map(tech => (
                                  <span key={tech} className="text-[10px] uppercase tracking-widest border border-white/30 px-2 py-1">{tech}</span>
                              ))}
                          </div>
                          <div className="mt-auto flex gap-4">
                              <a href={project.liveDemoUrl} className="text-sm uppercase tracking-tighter border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors">Live Demo</a>
                              <a href={project.githubUrl} className="text-sm uppercase tracking-tighter border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors">GitHub</a>
                          </div>
                      </div>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* Deep Dive (Case Study) */}
      <section className="min-h-screen bg-white text-black py-24 px-8 md:px-24 flex items-center">
          <div className="max-w-5xl mx-auto">
              <motion.h3 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[8vw] font-black uppercase leading-[0.8] mb-12"
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

      {/* Technical Skills */}
      <section className="bg-black text-white py-24 px-8 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/20 pt-12">
              {skills.map((category, idx) => (
                  <motion.div 
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  >
                      <h4 className="text-xs font-mono uppercase text-neutral-500 mb-6">{category.category}</h4>
                      <ul className="space-y-2">
                          {category.skills.map(skill => (
                              <li key={skill} className="text-2xl font-bold uppercase hover:text-neutral-400 transition-colors cursor-default">{skill}</li>
                          ))}
                      </ul>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* Services Section */}
      <section className="bg-white text-black py-24 border-t border-b border-black">
          <div className="overflow-hidden whitespace-nowrap">
              <motion.div 
                 initial={{ x: 0 }}
                 animate={{ x: "-50%" }}
                 transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                 className="flex gap-24 text-[8vw] font-black uppercase"
              >
                  {["Creative Direction", "Web Development", "Brand Identity", "Motion Design", "Creative Direction", "Web Development", "Brand Identity", "Motion Design"].map((service, i) => (
                      <span key={i} className="shrink-0">{service}</span>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-neutral-900/50" />
           
           <div className="relative z-10">
                <span className="text-sm font-mono uppercase tracking-widest mb-4 block animate-pulse">Available for work</span>
                <h2 
                  className="text-[12vw] font-black uppercase leading-[0.8] mb-8 cursor-pointer hover:text-outline hover:text-transparent transition-colors duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                    <a href={`mailto:${contactInfo.email}`}>Say Hello</a>
                </h2>
                <div className="flex gap-8 justify-center mt-12 flex-wrap">
                    <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="text-lg uppercase tracking-widest hover:underline underline-offset-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>LinkedIn</a>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-lg uppercase tracking-widest hover:underline underline-offset-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>GitHub</a>
                    <a href={contactInfo.resumeUrl} download className="text-lg uppercase tracking-widest hover:underline underline-offset-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Resume PDF</a>
                </div>
           </div>
      </section>

      {/* Footer */}
      <footer className="h-[50vh] flex items-center justify-center bg-white text-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 className="text-[8vw] font-black uppercase text-center leading-none">
              Make it <br/> happen
          </h2>
      </footer>
    </div>
  );
}
