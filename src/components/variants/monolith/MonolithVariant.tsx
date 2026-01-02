import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects, caseStudy, skills, contactInfo } from "@/lib/data";

export default function MonolithVariant() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-8 py-6 flex justify-between items-center bg-transparent backdrop-blur-sm">
        <h1 className="text-xl font-bold tracking-tight">MONOLITH</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {["Work", "About", "Contact"].map((item) => (
             <MagneticButton key={item} strength={0.3} className="px-4 py-2 hover:opacity-50 transition-opacity">
                <a href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
             </MagneticButton>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center px-8 md:px-24 pt-20">
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase font-display">
            Creating <br />
            <span className="italic font-light font-serif">Digital</span> <br />
            Presence
          </h2>
        </motion.div>
        
        <div className="mt-12 flex justify-between items-end border-t border-black pt-6">
           <p className="max-w-md text-lg leading-relaxed">
             {contactInfo.headline}
           </p>
           <div className="animate-spin-slow w-12 h-12 border-2 border-black border-t-transparent rounded-full" />
        </div>
      </section>

      {/* Big Three Projects */}
      <section id="work" className="min-h-screen border-t border-black p-8 md:p-24">
        <h3 className="text-[6vw] font-display font-bold uppercase mb-16 tracking-tighter">The Big Three</h3>
        <div className="flex flex-col gap-24">
            {projects.map((project, i) => (
                <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="order-2 md:order-1">
                        <span className="text-sm font-mono mb-4 block">0{i+1}</span>
                        <h4 className="text-4xl md:text-6xl font-bold uppercase mb-6 tracking-tighter">{project.title}</h4>
                        <p className="text-xl mb-8 leading-relaxed text-neutral-600 max-w-lg">{project.description}</p>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-xs font-mono border border-black px-3 py-1 uppercase">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-8">
                            <a href={project.liveDemoUrl} className="text-lg font-bold uppercase border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">Live Demo</a>
                            <a href={project.githubUrl} className="text-lg font-bold uppercase border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">GitHub Repo</a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 aspect-video bg-neutral-100 border border-black overflow-hidden group">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Case Study Deep Dive */}
      <section className="min-h-screen border-t border-black bg-black text-white p-8 md:p-24">
          <div className="max-w-6xl mx-auto">
              <h3 className="text-[8vw] font-display font-bold uppercase mb-20 leading-none">The <br/> Case <br/> Study</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/20 pt-12">
                  <div className="flex flex-col gap-6">
                      <span className="text-xs font-mono uppercase text-neutral-500">The Goal</span>
                      <p className="text-2xl leading-tight">{caseStudy.goal}</p>
                  </div>
                  <div className="flex flex-col gap-6">
                      <span className="text-xs font-mono uppercase text-neutral-500">The Challenge</span>
                      <p className="text-2xl leading-tight">{caseStudy.challenge}</p>
                  </div>
                  <div className="flex flex-col gap-6">
                      <span className="text-xs font-mono uppercase text-neutral-500">The Solution</span>
                      <p className="text-2xl leading-tight font-serif italic text-neutral-300">{caseStudy.solution}</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Technical Skills */}
      <section className="min-h-screen border-t border-black p-8 md:p-24 bg-white">
          <h3 className="text-4xl font-display font-bold uppercase mb-20 tracking-tighter">Stack & Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
              {skills.map((category) => (
                  <div key={category.category} className="border-t border-neutral-200 pt-8">
                      <h4 className="text-sm font-mono uppercase text-neutral-400 mb-8">{category.category}</h4>
                      <div className="flex flex-wrap gap-x-12 gap-y-4">
                          {category.skills.map(skill => (
                              <span key={skill} className="text-4xl md:text-5xl font-bold uppercase tracking-tighter hover:italic transition-all cursor-default">{skill}</span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white p-8 md:p-24 flex flex-col md:flex-row justify-between items-start md:items-end min-h-[60vh] border-t border-white/10">
         <div className="flex flex-col gap-8 max-w-2xl">
             <h4 className="text-7xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none">Let&apos;s Build</h4>
             <a href={`mailto:${contactInfo.email}`} className="text-2xl md:text-4xl font-light hover:opacity-70 transition-opacity">{contactInfo.email}</a>
         </div>
         <div className="flex flex-col gap-6 mt-16 md:mt-0 items-start md:items-end">
             <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
                <MagneticButton strength={0.2} className="hover:text-neutral-400 transition-colors">
                    <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </MagneticButton>
                <MagneticButton strength={0.2} className="hover:text-neutral-400 transition-colors">
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </MagneticButton>
                <MagneticButton strength={0.2} className="hover:text-neutral-400 transition-colors">
                    <a href={contactInfo.resumeUrl} download>Resume PDF</a>
                </MagneticButton>
             </div>
             <span className="text-[10px] font-mono opacity-50 uppercase tracking-[0.2em]">Designed for 2026 / Monolith Edition</span>
         </div>
      </footer>
    </div>
  );
}
