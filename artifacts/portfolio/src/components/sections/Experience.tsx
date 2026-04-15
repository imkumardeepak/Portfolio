import { motion } from "framer-motion";

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
              <div className="md:hidden absolute left-[11px] top-2 bottom-[-48px] w-[2px] bg-border group-last:bg-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 relative">
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
