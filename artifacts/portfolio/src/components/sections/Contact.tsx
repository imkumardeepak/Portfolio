import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, Mail, Phone, Github, Linkedin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "amikumardeepak@gmail.com", href: "mailto:amikumardeepak@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8409671140", href: "tel:+918409671140" },
  { icon: Github, label: "GitHub", value: "github.com/imkumardeepak", href: "https://github.com/imkumardeepak" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/amikumardeepak", href: "https://www.linkedin.com/in/amikumardeepak/" },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. Deepak will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel border-primary/20 text-primary text-sm font-mono tracking-wide">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build something together.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I'm open to new opportunities, freelance projects, and collaborations.
            Drop a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="space-y-4"
          >
            <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-6">
              Contact Details
            </p>
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 glass-panel rounded-xl border border-white/5 hover:border-primary/25 transition-colors duration-300 group"
                whileHover={shouldReduceMotion ? {} : { x: 4, transition: { duration: 0.2 } }}
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <Input
                id="name"
                required
                placeholder="Your name"
                className="bg-background/50 border-white/10 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-background/50 border-white/10 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                id="message"
                required
                placeholder="Hello Deepak, I'd like to discuss..."
                className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary resize-y"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-xl gap-2 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-shadow duration-300"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
