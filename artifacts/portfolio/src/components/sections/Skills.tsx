import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & .NET",
    skills: [
      "C#",
      "ASP.NET Core",
      ".NET Framework",
      "Entity Framework Core",
      "REST APIs",
      "SignalR",
      "Web API",
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Azure",
      "Git & GitHub",
      "Docker",
      "CI/CD Pipelines",
      "Visual Studio / VS Code",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Arsenal.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to build full-stack .NET solutions — from database design to polished frontend interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">
                {group.title}
              </h3>

              <ul className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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
