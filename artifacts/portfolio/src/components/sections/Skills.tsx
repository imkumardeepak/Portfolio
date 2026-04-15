import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "from-violet-500/15 to-transparent",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5 / CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend & .NET",
    color: "from-blue-500/15 to-transparent",
    skills: ["C#", "ASP.NET Core", ".NET Framework", "Entity Framework Core", "REST APIs", "SignalR", "Web API"],
  },
  {
    icon: Wrench,
    title: "Database & DevOps",
    color: "from-emerald-500/15 to-transparent",
    skills: ["SQL Server", "PostgreSQL", "Azure", "Git & GitHub", "Docker", "CI/CD Pipelines", "Visual Studio / VS Code"],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-28 px-6 relative bg-white/[0.015]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Arsenal.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A focused set of technologies I use daily to build full-stack .NET solutions — from database design to polished frontend interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25 } }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group cursor-default border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <group.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>

              <ul className="relative space-y-2.5">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: gi * 0.1 + si * 0.055 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0 group-hover:bg-primary transition-colors duration-300" />
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
