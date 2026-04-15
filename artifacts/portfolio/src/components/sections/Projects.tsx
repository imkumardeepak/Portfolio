import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Milk Bakery Order Management",
    type: "Full Stack .NET Application",
    description:
      "A comprehensive order management system for a milk and bakery business. Handles daily product orders, delivery scheduling, customer billing, and inventory tracking. Built with ASP.NET Core Web API backend and a React frontend, backed by SQL Server with optimized stored procedures for high-volume order processing.",
    tech: ["ASP.NET Core", "React.js", "SQL Server", "Entity Framework", "REST API"],
    image: "/project-1.png",
    github: "#",
    live: "#",
  },
  {
    title: "Weighbridge Management Application",
    type: "Enterprise Desktop + Web App",
    description:
      "An industrial weighbridge management system for recording vehicle weights, entry/exit logs, and generating weight-based billing reports. Integrates directly with hardware scale devices via serial communication. Built with WPF for the desktop client and ASP.NET Core Web API for centralized data management.",
    tech: ["WPF", "ASP.NET Core", "SQL Server", "Hardware Integration", "C#"],
    image: "/project-2.png",
    github: "#",
    live: "#",
  },
  {
    title: "Truck Management System",
    type: "Full Stack Fleet Management",
    description:
      "An end-to-end fleet and logistics management platform for tracking trucks, trips, drivers, and fuel records. Features real-time trip status updates using SignalR, route logging, maintenance scheduling, and detailed analytics dashboards. Handles 1,000+ daily transactions reliably with optimized API performance.",
    tech: ["ASP.NET Core", "Angular", "SignalR", "SQL Server", "Docker", "REST API"],
    image: "/project-3.png",
    github: "#",
    live: "#",
  },
  {
    title: "Asset Verification System",
    type: "Enterprise Asset Management",
    description:
      "A digital asset verification and audit platform for enterprise inventory management. Supports barcode and QR code scanning for asset tagging, verification workflows with role-based approvals, audit trail logging, and reporting. Built to replace paper-based audits with a fully digitized, trackable process.",
    tech: ["ASP.NET Core", "React.js", "SQL Server", "Entity Framework", "QR Integration"],
    image: "/project-4.png",
    github: "#",
    live: "#",
  },
  {
    title: "Printer Integration Platform",
    type: "Device Integration & Management",
    description:
      "A centralized printer and device integration platform that manages print jobs, driver configurations, and device health monitoring across multiple printers on a network. Supports thermal, label, and document printers through a unified API layer. Provides real-time status monitoring and job queue management via a web dashboard.",
    tech: ["ASP.NET Core", "Windows Forms", "C#", "REST API", "SQL Server", "Device SDKs"],
    image: "/project-5.png",
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
          <div className="absolute inset-0 bg-primary/25 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />
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
        <h3 className="text-xl md:text-2xl font-bold mb-5 hover:text-primary transition-colors duration-200 cursor-default">
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
            <li key={tech} className="hover:text-primary transition-colors duration-200">{tech}</li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
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
