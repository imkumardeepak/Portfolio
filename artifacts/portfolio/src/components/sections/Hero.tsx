import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroGlobe } from "./HeroGlobe";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SOCIAL_LINKS = [
  { href: "https://github.com/imkumardeepak", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/amikumardeepak/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:amikumardeepak@gmail.com", icon: Mail, label: "Email" },
  { href: "tel:+918409671140", icon: Phone, label: "Phone" },
];

const TECH_BADGES = [".NET Core", "C#", "React.js", "SQL Server", "Azure", "Microservices"];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
    >
      {/* 3D Globe canvas */}
      <div className="absolute inset-0 z-0">
        <HeroGlobe />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 100% at 70% 50%, transparent 30%, hsl(250,38%,3%) 75%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(250,38%,3%))",
        }}
      />

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-start gap-8 max-w-2xl">

          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3">
            <div className="relative flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="space-y-3">
            <motion.h1
              {...fadeUp(0.18)}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
            >
              Deepak Verma
            </motion.h1>

            <motion.h2
              {...fadeUp(0.28)}
              className="text-xl md:text-3xl font-medium text-muted-foreground max-w-xl"
            >
              Full Stack Developer &{" "}
              <span className="text-foreground font-semibold">.NET Engineer</span>
            </motion.h2>
          </div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.38)}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            3+ years building enterprise-grade applications with the .NET ecosystem.
            Specialized in high-performance APIs, microservices, and full-stack solutions
            that scale — from SQL Server databases to React frontends.
          </motion.p>

          {/* Tech badges */}
          <motion.div {...fadeUp(0.46)} className="flex flex-wrap gap-2">
            {TECH_BADGES.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-mono rounded-full border border-primary/30 bg-primary/10 text-primary/90 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA + Social */}
          <motion.div
            {...fadeUp(0.54)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2"
          >
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 group w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              asChild
            >
              <a href="#projects">
                View my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Button>

            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
          animate={shouldReduceMotion ? {} : { scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
