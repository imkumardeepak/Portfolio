import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Users, Zap } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Aarkay Techno Consultants",
    date: "Jul 2022 — Present",
    description:
      "Lead the design and development of enterprise web applications handling 1,000+ daily business transactions. Architected scalable microservices using ASP.NET Core and delivered React/Angular frontends. Drove a 30% API performance improvement through query optimization and caching strategies. Mentor junior developers and conduct code reviews to maintain high code quality.",
    tech: ["ASP.NET Core", "React.js", "SQL Server", "Microservices", "Entity Framework Core", "Docker"],
    achievements: [
      { icon: Zap, text: "30% API performance improvement" },
      { icon: TrendingUp, text: "1K+ daily transactions handled" },
      { icon: Users, text: "Mentored junior developers" },
    ],
  },
  {
    role: ".NET Developer Intern",
    company: "Aarkay Techno Consultants",
    date: "Jan 2022 — Jun 2022",
    description:
      "Contributed to real-world enterprise .NET projects during a 6-month internship. Built CRUD modules using ASP.NET MVC, developed database-driven features with Entity Framework and SQL Server, and wrote clean, maintainable C# code under senior developer guidance. Rapidly onboarded to the team's development workflow and agile processes.",
    tech: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "JavaScript", "Bootstrap"],
    achievements: [],
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Where I've been.
          </h2>
          <div className="w-20 h-1 bg-secondary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[12rem] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative pl-8 md:pl-0"
              >
                <div className="md:hidden absolute left-[9px] top-4 bottom-[-40px] w-px bg-border" />
                <div className="grid grid-cols-1 md:grid-cols-[12rem_auto] gap-4 md:gap-10 relative">
                  {/* Timeline dot — desktop */}
                  <div className="absolute left-[-32px] md:right-[-1.25rem] top-[1.6rem] w-3 h-3 rounded-full bg-primary z-10 hidden md:block shadow-[0_0_10px_rgba(140,90,255,0.8)]" />
                  {/* Timeline dot — mobile */}
                  <div className="absolute left-[5px] top-[1.35rem] w-2.5 h-2.5 rounded-full bg-primary z-10 md:hidden" />

                  {/* Date */}
                  <div className="text-muted-foreground font-mono text-xs pt-5 md:text-right pr-6 flex-shrink-0 leading-tight">
                    {exp.date}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                    className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors duration-300 shadow-lg hover:shadow-primary/10"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-0.5">{exp.role}</h3>
                    <div className="text-primary font-medium text-sm mb-4">{exp.company}</div>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{exp.description}</p>

                    {/* Achievement highlights */}
                    {exp.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-5">
                        {exp.achievements.map(({ icon: Icon, text }) => (
                          <div key={text} className="flex items-center gap-1.5 text-xs text-emerald-400/90 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                            <Icon className="w-3 h-3" />
                            {text}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
