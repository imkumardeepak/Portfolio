import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Frontend Engineer",
    company: "Nexus Design",
    date: "2021 — Present",
    description: "Lead the frontend architecture for high-traffic e-commerce platforms. Mentored a team of 4 junior developers and improved site performance by 40%.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind"]
  },
  {
    role: "Full-Stack Developer",
    company: "Orbit Studios",
    date: "2018 — 2021",
    description: "Developed custom web applications for enterprise clients. Architected robust REST APIs and integrated multiple third-party services.",
    tech: ["Node.js", "Express", "Vue", "PostgreSQL"]
  },
  {
    role: "UI/UX Developer",
    company: "Creative Form",
    date: "2016 — 2018",
    description: "Bridged the gap between design and engineering. Created interactive prototypes and implemented complex CSS animations for marketing sites.",
    tech: ["JavaScript", "Sass", "Figma", "GSAP"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Where I've been.
          </h2>
          <div className="w-20 h-1 bg-secondary rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              {/* Timeline line - mobile only */}
              <div className="md:hidden absolute left-[11px] top-2 bottom-[-48px] w-[2px] bg-border group-last:bg-transparent" />
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 relative">
                {/* Timeline dot */}
                <div className="absolute left-[-32px] md:left-auto md:-right-4 top-1.5 w-6 h-6 rounded-full bg-background border-4 border-muted z-10 md:hidden" />
                
                <div className="text-muted-foreground font-mono text-sm pt-1">
                  {exp.date}
                </div>
                
                <div className="glass-panel p-6 md:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-primary font-medium mb-4">
                    {exp.company}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
