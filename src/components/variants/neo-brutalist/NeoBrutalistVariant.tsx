"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects, caseStudy, skills, contactInfo } from "@/lib/data";

const Marquee = ({ text, direction = 1 }: { text: string; direction?: number }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap border-y-2 border-black bg-yellow-400 py-4 font-display text-4xl font-bold uppercase tracking-tighter text-black">
      <motion.div
        initial={{ x: direction > 0 ? "-100%" : "0%" }}
        animate={{ x: direction > 0 ? "0%" : "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="flex gap-8 px-4"
      >
        {Array(10).fill(text).map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction > 0 ? "-100%" : "0%" }}
        animate={{ x: direction > 0 ? "0%" : "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="flex gap-8 px-4"
      >
        {Array(10).fill(text).map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default function NeoBrutalistVariant() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen bg-[#E0E0E0] font-sans text-black selection:bg-black selection:text-[#E0E0E0]">
      <div className="fixed inset-0 z-50 pointer-events-none border-[20px] border-black" />
      
      {/* Header */}
      <header className="fixed top-5 left-5 right-5 z-40 flex justify-between items-center px-8 py-6 mix-blend-difference text-[#E0E0E0]">
        <h1 className="text-3xl font-black uppercase tracking-tight">NEO<br/>BRUTAL</h1>
        <div className="h-12 w-12 rounded-full border-4 border-[#E0E0E0] animate-pulse" />
      </header>

      {/* Hero */}
      <section className="h-screen w-full flex flex-col justify-center items-center pt-20 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600 rounded-full blur-[100px] opacity-20" />
         
         <h2 className="relative z-10 text-[12vw] leading-[0.8] font-black uppercase text-center mix-blend-multiply px-4">
           {contactInfo.headline.split(' ').slice(0, 2).join(' ')} <br />
           <span className="text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: "2px black" }}>Develop</span>
         </h2>
         
         <p className="relative z-10 mt-8 max-w-lg text-center font-mono font-bold bg-yellow-400 border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            {contactInfo.headline}
         </p>
         
         <motion.div style={{ rotate }} className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-black flex items-center justify-center rounded-full text-white font-bold text-sm md:text-xl p-4 text-center z-20">
            SCROLL <br/> NOW
         </motion.div>
      </section>

      <Marquee text="• DIGITAL • EXPERIENCE • BRUTAL • DESIGN • 2026 •" />

      {/* Big Three Projects */}
      <section className="p-8 md:p-24 bg-white border-t-4 border-black">
        <h3 className="text-6xl md:text-8xl font-black uppercase mb-12 bg-black text-white inline-block px-4 py-2">The Big 3</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
            {projects.map((project, i) => (
                <div key={project.id} className="group relative border-black md:border-r-4 last:border-r-0 border-b-4 md:border-b-0 flex flex-col hover:bg-yellow-400 transition-colors duration-300">
                    <div className="aspect-square border-b-4 border-black overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        <span className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 font-black text-2xl">0{i+1}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-3xl font-black uppercase mb-4 leading-tight">{project.title}</h4>
                        <p className="font-mono text-sm mb-6 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map(tech => (
                                <span key={tech} className="bg-black text-white text-[10px] px-2 py-1 font-bold">{tech}</span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 mt-auto">
                            <a href={project.liveDemoUrl} className="bg-blue-600 text-white border-2 border-black p-2 text-center font-black uppercase hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all">Live Demo</a>
                            <a href={project.githubUrl} className="bg-black text-white border-2 border-black p-2 text-center font-black uppercase hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Case Study (Deep Dive) */}
      <section className="p-8 md:p-24 bg-yellow-400 border-t-4 border-black overflow-hidden">
          <div className="max-w-6xl mx-auto">
              <h3 className="text-6xl md:text-9xl font-black uppercase mb-16 underline decoration-black underline-offset-8">Case Study</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                      <span className="bg-black text-white px-3 py-1 font-bold text-sm mb-6 inline-block">THE GOAL</span>
                      <p className="text-xl font-bold leading-tight">{caseStudy.goal}</p>
                  </div>
                  <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                      <span className="bg-black text-white px-3 py-1 font-bold text-sm mb-6 inline-block">THE CHALLENGE</span>
                      <p className="text-xl font-bold leading-tight">{caseStudy.challenge}</p>
                  </div>
                  <div className="bg-blue-600 text-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                      <span className="bg-white text-black px-3 py-1 font-bold text-sm mb-6 inline-block">THE SOLUTION</span>
                      <p className="text-xl font-black leading-tight italic">{caseStudy.solution}</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Skills Section */}
      <section className="p-8 md:p-24 bg-white border-t-4 border-black">
          <h3 className="text-4xl font-black uppercase mb-12 underline decoration-blue-600 underline-offset-4">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((category) => (
                  <div key={category.category} className="border-l-4 border-black pl-6 py-2">
                      <h4 className="font-mono font-bold text-neutral-400 uppercase mb-6 text-sm">/ {category.category}</h4>
                      <div className="flex flex-col gap-3">
                          {category.skills.map(skill => (
                              <span key={skill} className="text-3xl font-black uppercase hover:bg-yellow-400 px-2 transition-colors inline-block w-fit cursor-default">{skill}</span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-black border-t-4 border-black p-12 md:p-24 text-center">
         <h2 className="text-[10vw] font-black leading-none uppercase text-white drop-shadow-[5px_5px_0_#2563eb] mb-16">
            Let&apos;s Build
         </h2>
         <div className="flex flex-col items-center gap-12">
             <a href={`mailto:${contactInfo.email}`} className="text-2xl md:text-5xl font-mono text-yellow-400 font-black hover:underline underline-offset-8 transition-all">
                {contactInfo.email}
             </a>
             <div className="flex flex-wrap justify-center gap-6">
                 {[
                    { label: "LinkedIn", url: contactInfo.linkedIn },
                    { label: "GitHub", url: contactInfo.github },
                    { label: "Resume", url: contactInfo.resumeUrl }
                 ].map(link => (
                    <a 
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-4 border-black px-8 py-3 font-black uppercase text-xl hover:translate-x-1 hover:-translate-y-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all"
                    >
                        {link.label}
                    </a>
                 ))}
             </div>
             <p className="mt-16 text-neutral-500 font-mono font-bold uppercase tracking-widest text-xs">
                Built for 2026 • Neo-Brutalist Edition • All Rights Reserved
             </p>
         </div>
      </footer>
    </div>
  );
}
