"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects, caseStudy, skills, contactInfo } from "@/lib/data";

const FloatingCard = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
        className={cn(
          "backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
          className
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function EtherealVariant() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 rounded-full blur-[120px]" />
         <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <h1 className="text-xl font-light tracking-widest uppercase opacity-80">Ethereal</h1>
        <nav className="hidden md:flex gap-8 text-sm font-light tracking-widest opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Profile</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <motion.h2 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-[10vw] font-thin tracking-tighter leading-none bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
        >
          Beyond
          <br />
          <span className="font-normal italic font-serif">Reality</span>
        </motion.h2>
        
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
             className="mt-8 text-xl max-w-2xl font-light"
        >
            {contactInfo.headline}
        </motion.p>
      </section>

      {/* Big Three Projects */}
      <section id="work" className="relative z-10 min-h-screen p-8 md:p-24">
        <h3 className="text-4xl font-light uppercase tracking-[0.4em] mb-24 opacity-60 text-center">The Big Three</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, i) => (
                <FloatingCard key={project.id} delay={i * 0.2} className="flex flex-col group h-full">
                    <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 border border-white/10 group-hover:border-white/30 transition-colors">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="mt-auto">
                        <span className="text-[10px] font-mono tracking-widest opacity-40 uppercase mb-2 block">0{i+1} / Project</span>
                        <h4 className="text-3xl font-light mb-4 group-hover:translate-x-1 transition-transform">{project.title}</h4>
                        <p className="text-sm opacity-50 mb-6 font-light leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-[9px] uppercase tracking-widest border border-white/10 px-2 py-1 bg-white/5 rounded-full">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-6">
                            <a href={project.liveDemoUrl} className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity border-b border-white/10 pb-1">Live Demo</a>
                            <a href={project.githubUrl} className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity border-b border-white/10 pb-1">Source</a>
                        </div>
                    </div>
                </FloatingCard>
            ))}
        </div>
      </section>

      {/* Deep Dive */}
      <section className="relative z-10 min-h-screen flex items-center p-8 md:p-24">
          <div className="max-w-4xl mx-auto">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                className="text-[6vw] font-thin uppercase tracking-[0.5em] mb-16 text-center"
              >
                  Analysis
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FloatingCard delay={0.1}>
                      <span className="text-[10px] font-mono uppercase opacity-30 mb-4 block">The Goal</span>
                      <p className="text-lg font-light leading-relaxed">{caseStudy.goal}</p>
                  </FloatingCard>
                  <FloatingCard delay={0.3}>
                      <span className="text-[10px] font-mono uppercase opacity-30 mb-4 block">The Challenge</span>
                      <p className="text-lg font-light leading-relaxed">{caseStudy.challenge}</p>
                  </FloatingCard>
                  <FloatingCard delay={0.5}>
                      <span className="text-[10px] font-mono uppercase opacity-30 mb-4 block">The Solution</span>
                      <p className="text-lg font-light leading-relaxed italic opacity-80">{caseStudy.solution}</p>
                  </FloatingCard>
              </div>
          </div>
      </section>

      {/* Skills */}
      <section className="relative z-10 py-32 px-8">
          <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {skills.map((category, idx) => (
                      <div key={category.category} className="space-y-6">
                          <h4 className="text-xs font-mono uppercase tracking-[0.3em] opacity-30">{category.category}</h4>
                          <div className="space-y-3">
                              {category.skills.map((skill, sIdx) => (
                                  <motion.div 
                                    key={skill}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                                    className="text-2xl font-thin tracking-widest hover:pl-2 hover:opacity-60 transition-all cursor-default"
                                  >
                                      {skill}
                                  </motion.div>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

       {/* Footer */}
      <footer id="contact" className="relative z-10 py-32 px-8 border-t border-white/5 bg-black/40 backdrop-blur-xl">
         <div className="max-w-4xl mx-auto text-center">
             <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-5xl md:text-7xl font-thin tracking-[0.2em] mb-12 uppercase"
             >
                 Connect
             </motion.h4>
             <a href={`mailto:${contactInfo.email}`} className="text-2xl md:text-3xl font-thin tracking-widest hover:opacity-50 transition-opacity block mb-16">{contactInfo.email}</a>
             
             <div className="flex justify-center gap-12 flex-wrap mb-24 opacity-40">
                <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.3em] hover:opacity-100 transition-opacity">LinkedIn</a>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.3em] hover:opacity-100 transition-opacity">GitHub</a>
                <a href={contactInfo.resumeUrl} download className="text-xs uppercase tracking-[0.3em] hover:opacity-100 transition-opacity">Resume</a>
             </div>
             
             <p className="text-[10px] font-mono tracking-widest opacity-20 uppercase">© 2026 Ethereal Systems / Created for Excellence</p>
         </div>
      </footer>
    </div>
  );
}
