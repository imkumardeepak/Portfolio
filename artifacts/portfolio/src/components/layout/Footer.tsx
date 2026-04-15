import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 text-center px-6 border-t border-white/5 bg-background relative z-10">
      <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/deepakverma"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/deepakverma"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:amikumardeepak@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:+918409671140"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <span className="sr-only">Phone</span>
            <Phone className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm font-mono text-muted-foreground">
          <p>Designed &amp; Built by Deepak Verma</p>
          <p className="mt-1 opacity-60">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
