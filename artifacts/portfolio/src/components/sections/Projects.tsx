import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "NovaPulse",
    type: "Featured Project",
    description: "A real-time analytics dashboard built with WebSockets and complex data visualization. Allows users to monitor network traffic, identify anomalies, and generate automated reports with zero latency.",
    tech: ["React", "D3.js", "Node.js", "Socket.io"],
    image: "/project-1.png",
    github: "#",
    live: "#"
  },
  {
    title: "Verdant",
    type: "Mobile Web App",
    description: "A smart plant care application that uses machine learning to identify plant species and recommend tailored watering schedules. Features a rich interactive calendar and push notifications.",
    tech: ["TypeScript", "Next.js", "Tailwind", "TensorFlow.js"],
    image: "/project-2.png",
    github: "#",
    live: "#"
  },
  {
    title: "Orbit",
    type: "Featured Project",
    description: "A collaborative multiplayer whiteboard tool designed for remote design teams. Features real-time cursor tracking, shape operations, and a completely custom canvas rendering engine.",
    tech: ["React", "Canvas API", "Yjs", "Redis"],
    image: "/project-3.png",
    github: "#",
    live: "#"
  },
  {
    title: "Aurora",
    type: "Web Application",
    description: "A creative platform for generative artists to share and remix shader code. Includes a live in-browser WebGL editor, user profiles, and a trending gallery algorithm.",
    tech: ["Three.js", "Vue", "Express", "MongoDB"],
    image: "/project-4.png",
    github: "#",
    live: "#"
  }
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      {/* Image container */}
      <div className={`relative z-10 lg:col-span-7 ${isEven ? 'lg:col-start-1' : 'lg:col-start-6'} group`}>
        <div className="relative aspect-video rounded-xl overflow-hidden glass-panel">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content container */}
      <div className={`relative z-20 lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:col-start-7 lg:text-right' : 'lg:col-start-1 lg:text-left'} text-left mt-8 lg:mt-0`}>
        <p className="text-primary font-mono text-sm mb-2">{project.type}</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 hover:text-primary transition-colors cursor-pointer inline-block">
          {project.title}
        </h3>
        
        <div className="glass-panel p-6 rounded-xl mb-6 shadow-xl z-20 relative">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className={`flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mb-8 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
          {project.tech.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
          <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
            <ExternalLink className="w-5 h-5" />
            <span className="sr-only">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex items-center gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Some things I've built.
          </h2>
          <div className="flex-1 h-[1px] bg-border max-w-sm" />
        </motion.div>

        <div className="space-y-32">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
