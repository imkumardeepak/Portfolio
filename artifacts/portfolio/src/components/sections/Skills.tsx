import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SKILL_GROUPS = [
  {
    icon: Server,
    title: "Backend & .NET",
    color: "from-violet-500/15 to-transparent",
    skills: [
      "C# / .NET Core",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "Entity Framework Core",
      "LINQ",
      "Microservices",
      "GraphQL",
      "REST APIs",
      "WPF / Windows Forms",
    ],
  },
  {
    icon: Monitor,
    title: "Frontend",
    color: "from-blue-500/15 to-transparent",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Node.js",
      "HTML5 / CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-teal-500/15 to-transparent",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "MongoDB",
      "Entity Framework",
      "Stored Procedures",
      "Query Optimization",
    ],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    color: "from-emerald-500/15 to-transparent",
    skills: [
      "Docker",
      "CI/CD Pipelines",
      "Git & GitHub",
      "Azure",
      "Visual Studio",
      "Postman",
      "Swagger / OpenAPI",
    ],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-28 px-6 relative bg-white/[0.015]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Arsenal.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive stack built over 3+ years of enterprise development — from .NET microservices to modern frontend frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: EASE }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25 } }}
              className="glass-panel p-6 rounded-2xl relative overflow-hidden group cursor-default border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              <div className="relative flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <group.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-bold">{group.title}</h3>
              </div>

              <ul className="relative space-y-2">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: gi * 0.08 + si * 0.045 }}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0 group-hover:bg-primary transition-colors duration-300" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
