import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, Lock } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-muted/30">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to exciting opportunities, collaborations, and innovative projects
          </p>
        </div>

        <div className="glass-card-hover p-10 md:p-14 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="mailto:melvinjose025@gmail.com"
              className="flex items-start gap-5 p-6 rounded-2xl hover:bg-card/60 border border-transparent hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:shadow-glow transition-all duration-500">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-all duration-300">Email</h3>
                <p className="text-sm text-muted-foreground">melvinjose025@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+917902810037"
              className="flex items-start gap-5 p-6 rounded-2xl hover:bg-card/60 border border-transparent hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:shadow-glow transition-all duration-500">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-all duration-300">Phone</h3>
                <p className="text-sm text-muted-foreground">+91-7902810037</p>
              </div>
            </a>

            <div className="flex items-start gap-5 p-6 rounded-2xl border border-border/50">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Kottayam,Kerala</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <h3 className="text-center font-bold text-lg mb-8">Connect on platforms</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                variant="outline" 
                className="gap-2 border-border bg-card/30 hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <a href="https://github.com/MelvinjoseC" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="gap-2 border-border bg-card/30 hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <a href="mailto:melvinjose025@gmail.com?subject=Bitbucket%20portfolio%20access">
                  <Lock className="w-5 h-5" />
                  Bitbucket (private)
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="gap-2 border-border bg-card/30 hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/melvinchackojose" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="gap-2 border-border bg-card/30 hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <a href="https://leetcode.com/melvin_c_jose/" target="_blank" rel="noopener noreferrer">
                  <Code className="w-5 h-5" />
                  LeetCode
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="gap-2 border-border bg-card/30 hover:bg-card/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <a href="https://www.hackerrank.com/melvinjose025?hr_r=1" target="_blank" rel="noopener noreferrer">
                  <Code className="w-5 h-5" />
                  HackerRank
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
