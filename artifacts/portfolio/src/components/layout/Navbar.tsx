import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:justify-center">
        <a
          href="#about"
          onClick={(e) => handleClick(e, "#about")}
          className="md:hidden rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-foreground/90 backdrop-blur-md"
        >
          DV
        </a>

        <nav className={cn(
          "hidden items-center gap-1 rounded-full px-4 py-2 transition-all duration-500 md:flex",
          scrolled ? "glass-panel shadow-lg shadow-black/20" : "bg-transparent"
        )}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors"
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}>
                  {item.label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/90 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "h-11 w-11 rounded-full border-white/10 backdrop-blur-md md:hidden",
                scrolled ? "bg-black/40 text-foreground" : "bg-black/20 text-foreground"
              )}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="border-white/10 bg-slate-950/95 px-5 pb-8 pt-14 text-foreground backdrop-blur-xl"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Jump to a section of the portfolio.
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);

                return (
                  <SheetClose asChild key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={cn(
                        "rounded-2xl border px-4 py-4 text-base font-medium transition-all duration-300",
                        isActive
                          ? "border-primary/40 bg-primary/15 text-foreground"
                          : "border-white/8 bg-white/5 text-muted-foreground hover:border-primary/25 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
