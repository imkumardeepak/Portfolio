import { motion, useReducedMotion } from "framer-motion";

const EXPERIENCES = [
  {
    role: ".NET Full Stack Developer",
    company: "Software Development Company",
    date: "2022 — Present",
    description:
      "Designing and developing enterprise-grade web applications using ASP.NET Core and React. Lead backend architecture decisions, implement RESTful APIs, and manage SQL Server databases. Collaborate closely with product and design teams to deliver clean, performant solutions.",
    tech: ["ASP.NET Core", "React", "SQL Server", "Azure", "Entity Framework Core"],
  },
  {
    role: "Junior .NET Developer",
    company: "IT Solutions Firm",
    date: "2020 — 2022",
    description:
      "Built and maintained .NET Web API services for client-facing applications. Developed Angular-based frontends, wrote unit tests, and actively participated in code reviews. Gained deep expertise in C#, MVC patterns, and relational database design.",
    tech: ["C#", ".NET Framework", "Angular", "SQL Server", "Web API"],
  },
  {
    role: "Software Engineering Intern",
    company: "Tech Startup",
    date: "2019 — 2020",
    description:
      "Contributed to an ASP.NET MVC project during internship, building CRUD modules and integrating third-party APIs. Learned software development best practices including version control with Git, agile workflows, and test-driven development.",
    tech: ["ASP.NET MVC", "JavaScript", "SQL Server", "Git", "Bootstrap"],
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[11.5rem] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden md:block" />

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
                {/* Mobile timeline line */}
                <div className="md:hidden absolute left-[9px] top-4 bottom-[-40px] w-px bg-border last:bg-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-[12rem_auto] gap-4 md:gap-10 relative">
                  {/* Timeline dot — desktop */}
                  <div className="absolute left-[-32px] md:left-auto md:right-[-1.25rem] top-[1.35rem] w-2.5 h-2.5 rounded-full bg-primary/80 z-10 hidden md:block shadow-[0_0_8px_rgba(140,90,255,0.7)]" />
                  {/* Timeline dot — mobile */}
                  <div className="absolute left-[5px] top-[1.35rem] w-2.5 h-2.5 rounded-full bg-primary/80 z-10 md:hidden" />

                  {/* Date */}
                  <div className="text-muted-foreground font-mono text-sm pt-5 md:text-right pr-6 flex-shrink-0">
                    {exp.date}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                    className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors duration-300 shadow-lg hover:shadow-primary/10"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-primary font-medium text-sm mb-4">
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {exp.description}
                    </p>
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
