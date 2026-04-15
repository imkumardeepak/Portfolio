import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. Deepak will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel border-primary/20 text-primary text-sm font-mono tracking-wide">
            What's Next?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            I'm open to new opportunities, freelance projects, and collaborations. Whether you have a project in mind or just want to connect, feel free to drop a message — I'll get back to you as soon as possible!
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-6 text-left"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <Input
                id="name"
                required
                placeholder="Your name"
                className="bg-background/50 border-white/10 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-background/50 border-white/10 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                required
                placeholder="Hello Deepak..."
                className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary resize-y"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-xl gap-2 font-medium"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
