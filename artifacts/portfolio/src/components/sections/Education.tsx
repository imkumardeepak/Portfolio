import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap, TrendingDown, TrendingUp } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering, Computer Science",
    school: "Rashtrasant Tukadoji Maharaj Nagpur University",
    meta: "CGPA 7.21 | 2021 - 2023",
  },
  {
    degree: "Diploma in Computer Science",
    school: "Tulsiramji Gaikwad Patil College of Engineering and Technology",
    meta: "CGPA 7.76 | 2018 - 2021",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    text: "Delivered industrial automation solutions for Hindalco and Haldiram's.",
  },
  {
    icon: TrendingUp,
    text: "Improved API performance by 30% through backend and database optimization.",
  },
  {
    icon: TrendingDown,
    text: "Reduced production defects by 30% with validation and testing workflows.",
  },
  {
    icon: TrendingDown,
    text: "Reduced manual operational effort by 40% in weighbridge automation.",
  },
];

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  const inView = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section id="education" className="py-28 px-6 relative bg-white/[0.015]">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...inView()} className="mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Education & wins.
          </h2>
          <div className="w-20 h-1 bg-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr] gap-8">
          <motion.div {...inView(0.08)} className="space-y-4">
            {EDUCATION.map((item) => (
              <div
                key={item.degree}
                className="glass-panel rounded-2xl border border-white/5 p-6 transition-colors duration-300 hover:border-primary/20"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{item.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-4 font-mono text-xs text-primary">{item.meta}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...inView(0.14)}
            className="glass-panel rounded-2xl border border-white/5 p-6 md:p-8"
          >
            <p className="mb-6 text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Selected achievements
            </p>
            <div className="space-y-4">
              {ACHIEVEMENTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
