import { useState, useEffect } from "react";
import { Github, Linkedin, Lock, Mail, Phone, MapPin, Terminal, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";

const roles = [
  "Software Developer",
  "Python Developer", 
  "Data Engineering Specialist",
  "Automation Expert",
  "DevOps Engineer",
  "Full-Stack Developer"
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-mesh"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rotate-45 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Tech icons with glow */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 shadow-glow animate-pulse" style={{ animationDelay: '0s' }}>
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/20 animate-pulse" style={{ animationDelay: '0.3s' }}>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div className="p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 shadow-glow animate-pulse" style={{ animationDelay: '0.6s' }}>
              <Zap className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/60">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Private GitHub & Bitbucket portfolio on request</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80 mb-4">
                Melvin Chacko Jose
              </span>
              <span 
                className={`block text-4xl md:text-5xl text-gradient glow-text transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              >
                {roles[currentRole]}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Crafting scalable solutions with <span className="text-primary font-semibold">Python</span>, 
              <span className="text-primary font-semibold"> Data Engineering</span>, 
              <span className="text-primary font-semibold"> Cloud Infrastructure</span>, and 
              <span className="text-primary font-semibold"> Automation</span>. Additional enterprise builds live in private GitHub and Bitbucket repos due to client policy - happy to demo highlights.
            </p>
          </div>

          {/* Contact info with glassmorphism */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:melvinjose025@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-card/60 transition-all group">
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-muted-foreground">melvinjose025@gmail.com</span>
            </a>
            <a href="tel:+917902810037" className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-card/60 transition-all group">
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-muted-foreground">+91-7902810037</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Kottayam, Kerala</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToProjects}
              className="border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              View Projects
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-primary/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <a href="mailto:melvinjose025@gmail.com?subject=Intro%20call%20with%20Melvin">
                Book a call
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-1">
            NDA-friendly walkthroughs of private GitHub and Bitbucket work are available on request.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 pt-3">
            <div className="glass-card p-4 rounded-2xl border border-border/60 text-left">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Focus</p>
              <p className="text-base font-semibold">Data + Automation</p>
              <p className="text-sm text-muted-foreground">ETL/ELT, APIs, orchestration.</p>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-border/60 text-left">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Reliability</p>
              <p className="text-base font-semibold">Cloud-first delivery</p>
              <p className="text-sm text-muted-foreground">AWS, Docker, CI/CD, IaC.</p>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-border/60 text-left">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Collaboration</p>
              <p className="text-base font-semibold">Partner mindset</p>
              <p className="text-sm text-muted-foreground">Clear docs, async updates, demos on demand.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 pt-6">
            <Button 
              asChild
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-card/50 hover:text-primary hover:scale-110 transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <a href="https://github.com/MelvinjoseC" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              asChild
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-card/50 hover:text-primary hover:scale-110 transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <a href="https://www.linkedin.com/in/melvinchackojose" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed so it's visible on load */}
      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-50 pointer-events-none">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 shadow-glow bg-background/40 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
