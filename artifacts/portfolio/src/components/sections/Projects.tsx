import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Enterprise HR Management System",
    type: "Full Stack .NET Application",
    description:
      "A comprehensive HR management platform built with ASP.NET Core and React. Features employee onboarding workflows, leave management, payroll processing, and role-based access control. Backed by SQL Server with Entity Framework Core.",
    tech: ["ASP.NET Core", "React", "SQL Server", "Entity Framework", "Azure AD"],
    image: "/project-1.png",
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Order Tracking API",
    type: "Backend .NET Microservice",
    description:
      "A high-performance microservice for real-time order lifecycle tracking using ASP.NET Core Web API and SignalR. Supports push notifications, live status updates across clients, and integrates with third-party logistics APIs.",
    tech: ["ASP.NET Core", "SignalR", "Azure Service Bus", "SQL Server", "Docker"],
    image: "/project-2.png",
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    type: "Full Stack Web Application",
    description:
      "A full-featured e-commerce solution with product catalog, shopping cart, Stripe payment integration, and an Angular-based admin dashboard. Built on .NET Web API with a clean layered architecture using the repository pattern.",
    tech: ["ASP.NET Core", "Angular", "Stripe API", "PostgreSQL", "Entity Framework"],
    image: "/project-3.png",
    github: "#",
    live: "#",
  },
  {
    title: "Inventory & Warehouse Management",
    type: "Enterprise Web Application",
    description:
      "An end-to-end warehouse management system for tracking stock levels, purchase orders, and supplier relationships. Features barcode scanning support, automated low-stock alerts, and detailed reporting dashboards.",
    tech: ["Blazor", "C#", ".NET", "SQL Server", "REST APIs"],
    image: "/project-4.png",
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      {/* Image */}
      <motion.div
        className={`relative z-10 lg:col-span-7 ${isEven ? "lg:col-start-1" : "lg:col-start-6"} group`}
        whileHover={shouldReduceMotion ? {} : { scale: 1.015, transition: { duration: 0.35 } }}
      >
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/8 shadow-2xl shadow-black/40">
          {/* Color overlay */}
          <div className="absolute inset-0 bg-primary/25 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 ring-1 ring-primary/0 group-hover:ring-primary/30 rounded-xl transition-all duration-400 z-20" />
        </div>
      </motion.div>

      {/* Content */}
      <div
        className={`relative z-20 lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:col-start-7 lg:text-right" : "lg:col-start-1 lg:text-left"} text-left mt-6 lg:mt-0`}
      >
        <p className="text-primary font-mono text-xs tracking-wider uppercase mb-2">
          {project.type}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-5 hover:text-primary transition-colors duration-200 cursor-default">
          {project.title}
        </h3>

        <motion.div
          className="glass-panel p-5 rounded-xl mb-5 border border-white/6 shadow-xl"
          whileHover={shouldReduceMotion ? {} : { borderColor: "rgba(140,90,255,0.2)", transition: { duration: 0.2 } }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <ul
          className={`flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-6 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="hover:text-primary transition-colors duration-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`flex items-center gap-4 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}
        >
          {[
            { href: project.github, Icon: Github, label: "GitHub" },
            { href: project.live, Icon: ExternalLink, label: "Live Demo" },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 -m-2"
              whileHover={shouldReduceMotion ? {} : { scale: 1.2, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex items-center gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
            Things I've built.
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </motion.div>

        <div className="space-y-28">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
