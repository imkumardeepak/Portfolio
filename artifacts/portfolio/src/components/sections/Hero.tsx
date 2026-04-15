import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Available for new opportunities
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-balance"
            >
              Deepak Kumar
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-4xl font-medium text-muted-foreground max-w-3xl text-balance"
            >
              .NET Full Stack Developer &{" "}
              <span className="text-foreground">Software Engineer</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            I build robust, scalable enterprise applications using the .NET ecosystem. 
            Passionate about clean architecture, efficient APIs, and delivering high-quality software solutions from frontend to backend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <Button size="lg" className="rounded-full px-8 gap-2 group w-full sm:w-auto" asChild>
              <a href="#projects">
                View my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="flex items-center gap-6">
              <a href="https://github.com/deepakkumar" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/deepakkumar" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:deepak@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
