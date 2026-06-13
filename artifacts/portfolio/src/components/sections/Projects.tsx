import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PROJECTS = [
  {
    title: "Asset Verification System - Hindalco",
    type: "RFID Enterprise Asset Management",
    description:
      "RFID-enabled asset tracking and verification platform for enterprise inventory audits. Implemented secure JWT authentication, RBAC authorization, real-time asset monitoring, reporting workflows, and offline synchronization support for Android devices to improve audit visibility and reduce manual effort.",
    tech: ["ASP.NET Core", "React.js", "RFID", "SQL Server", "JWT", "RBAC"],
    image: "/project-asset-verification.png",
    github: "#",
    live: "#",
  },
  {
    title: "Order Management System - Haldiram's",
    type: "FMCG Production & Dispatch Platform",
    description:
      "Enterprise order processing system covering billing, dispatch, production workflows, and SAP integration. Built scalable ASP.NET Core APIs and React interfaces, automated business operations, and added CI/CD plus automated testing to reduce operational errors and improve production visibility.",
    tech: ["ASP.NET Core", "React.js", "SAP Integration", "SQL Server", "CI/CD"],
    image: "/project-order-management.png",
    github: "#",
    live: "#",
  },
  {
    title: "Industrial Printer Integration Platform",
    type: "Device Integration & Batch Printing",
    description:
      "Centralized industrial printer communication platform for LINX, Videojet, Markem-Imaje, and Trident style printers. Automated batch, manufacturing date, expiry date, MRP, and SKU printing through TCP/IP and RS-232 communication, reducing labeling errors across production lines.",
    tech: ["C#", "WPF", "TCP/IP", "RS-232", "Industrial Printers"],
    image: "/project-printer-integration.png",
    github: "#",
    live: "#",
  },
  {
    title: "Vision Scanner Integration System",
    type: "Industrial QA & Barcode Verification",
    description:
      "Production monitoring and barcode verification system integrated with Cognex, Keyence, Honeywell, and Pepperl+Fuchs style scanners. Implemented scanner SDK communication, reject handling logic, and real-time monitoring to strengthen quality control on manufacturing lines.",
    tech: ["C#", "WPF", "TCP/IP", "Scanner SDKs", "Vision Systems"],
    image: "/project-vision-scanner.png",
    github: "#",
    live: "#",
  },
  {
    title: "Weighbridge Management System",
    type: "Logistics Automation Platform",
    description:
      "Vehicle weighing and image capture automation system using SQL Server and camera SDK integrations. Generated digital weight slips, overload alerts, vehicle entry/exit logs, and reports while reducing manual operations by 40%.",
    tech: ["C#", "SQL Server", "Dahua SDK", "Hikvision SDK", "Automation"],
    image: "/project-weighbridge.png",
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
      transition={{ duration: 0.7, ease: EASE }}
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
          transition={{ duration: 0.6, ease: EASE }}
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
