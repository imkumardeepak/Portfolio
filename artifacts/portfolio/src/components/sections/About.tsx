import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Cpu } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Code2, label: "Clean Code", desc: "SOLID principles & DRY patterns" },
  { icon: Layers, label: "Full Stack", desc: "Frontend to backend & cloud" },
  { icon: Cpu, label: ".NET Expert", desc: "C#, ASP.NET Core, EF Core" },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const inView = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          {...inView()}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-center"
        >
          {/* Avatar side */}
          <div className="relative group">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="aspect-square overflow-hidden rounded-2xl bg-muted relative z-10 border border-white/10 shadow-2xl shadow-primary/10"
            >
              <img
                src="/avatar.png"
                alt="Deepak Kumar"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </motion.div>
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 group-hover:rotate-3 transition-transform duration-500" />
            <div className="absolute -inset-4 border border-secondary/10 rounded-2xl -z-10 group-hover:-rotate-2 transition-transform duration-500 delay-75" />
          </div>

          {/* Text side */}
          <div className="space-y-8">
            <motion.div {...inView(0.1)}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                Behind the code.
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </motion.div>

            <motion.div {...inView(0.18)} className="space-y-5 text-base md:text-lg text-muted-foreground">
              <p>
                Hi! I'm <span className="text-foreground font-medium">Deepak Kumar</span>, a .NET Full Stack Developer with a strong passion for building enterprise-grade web applications. I specialize in the Microsoft technology stack — crafting powerful backend APIs with ASP.NET Core and responsive frontends with React and Angular.
              </p>
              <p>
                My engineering journey spans diverse domains — from designing scalable microservice architectures and RESTful APIs to building database-driven solutions with SQL Server and Entity Framework. I take pride in writing clean, maintainable code that stands the test of time.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new .NET features, contributing to the developer community, and continuously leveling up my skills.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div {...inView(0.26)} className="grid grid-cols-3 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  className="glass-panel p-4 rounded-xl border border-white/5 group cursor-default"
                  whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(140,90,255,0.3)" }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-xs font-semibold text-foreground mb-0.5">{label}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...inView(0.32)}>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
              >
                See my experience
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
