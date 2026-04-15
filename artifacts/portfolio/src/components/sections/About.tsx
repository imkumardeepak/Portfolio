import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center"
        >
          {/* Avatar side */}
          <div className="relative group">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted relative z-10 border border-white/10">
              <img
                src="/avatar.png"
                alt="Deepak Kumar"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 group-hover:rotate-3 transition-transform duration-500" />
            <div className="absolute -inset-4 border border-secondary/20 rounded-2xl -z-10 group-hover:-rotate-2 transition-transform duration-500 delay-75" />
          </div>

          {/* Text side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                Behind the code.
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hi! I'm Deepak Kumar, a .NET Full Stack Developer with a strong passion for building enterprise-grade web applications. I specialize in the Microsoft technology stack — crafting everything from powerful backend APIs with ASP.NET Core to responsive frontends with React and Angular.
              </p>
              <p>
                My engineering journey has taken me through diverse domains — from designing scalable microservice architectures and RESTful APIs to building database-driven solutions with SQL Server and Entity Framework. I take pride in writing clean, maintainable code that stands the test of time.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new .NET features, contributing to open source, and sharing knowledge with the developer community. I believe great software is built through collaboration, continuous learning, and attention to detail.
              </p>
            </div>

            <a href="#experience" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
              See my experience
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
