import { ExternalLink, GitBranch, Lock, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Automated ETL Pipeline for ERP System",
    description: "Extracted, transformed, and loaded data from MySQL into AWS RDS. Improved performance by 20% using optimized SQL & batching. Implemented schema validation, logging, and error-handling mechanisms.",
    tech: ["Python", "SQL", "AWS"],
    featured: true
  },
  {
    title: "Lead Management & ERP Module",
    description: "Designed full lead tracking & analytics workflow. Built REST APIs for structured data usage. Containerized and deployed with Docker on AWS EC2.",
    tech: ["Django", "MySQL", "AWS", "Docker"],
    featured: true
  },
  {
    title: "E-commerce Analytics Pipeline",
    description: "Processed 1000+ daily transaction logs. Integrated Razorpay APIs for payment insights. Automated builds and deployments using Jenkins.",
    tech: ["Python", "MySQL", "Docker", "Jenkins"],
    featured: false
  },
  {
    title: "Hospital Appointment System",
    description: "Developed API-based booking, scheduling & patient management system. Implemented secure role-based authentication. Deployed using Docker + AWS.",
    tech: ["Python", "Django", "MySQL", "Docker", "AWS"],
    featured: false
  },
  {
    title: "File Organizer Desktop Tool",
    description: "Automatically organizes files by type, size, and date. Designed for productivity & easy file management.",
    tech: ["Python", "Tkinter"],
    featured: false
  },
  {
    title: "AutoCAD Batch Renamer",
    description: "Automates CAD file renaming & metadata cleanup. Saves significant manual processing time.",
    tech: ["Python"],
    featured: false
  },
  {
    title: "n8n Workflow: Email + Google Sheets Automation",
    description: "Parses incoming emails, transforms content, stores output in Google Sheets. Includes webhook triggers, validation, and error-handling.",
    tech: ["n8n", "Google Sheets", "Webhooks"],
    featured: false
  },
  {
    title: "React.js Personal Dashboard",
    description: "Built a lightweight dashboard with charts, tasks, reminders, and quick analytics.",
    tech: ["React.js", "JavaScript"],
    featured: false
  },
  {
    title: "Power Automate: Auto-Approval Workflow",
    description: "Automated approval process with notifications & SharePoint integration. Logs every action for audit tracking.",
    tech: ["Power Automate", "SharePoint"],
    featured: false
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Projects & Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable systems and automating complex workflows, with additional client projects hosted privately on GitHub and Bitbucket.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button 
              asChild 
              className="shadow-glow"
            >
              <a href="#contact">Discuss a build</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-primary/50 hover:border-primary/70"
            >
              <a href="mailto:melvinjose025@gmail.com?subject=Private%20case%20studies%20request">
                Request private case studies
              </a>
            </Button>
          </div>
        </div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className={`group glass-card-hover relative overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500"></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:shadow-glow transition-all duration-500">
                    <GitBranch className="w-6 h-6 text-primary" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 rounded-full"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 relative">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-secondary transition-colors border border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="lg:col-span-3 md:col-span-2 relative overflow-hidden border border-primary/40 bg-gradient-to-r from-primary/10 via-background to-accent/10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-8 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"></div>
              <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl"></div>
            </div>
            <CardHeader className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/15 rounded-xl border border-primary/30">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                  Private portfolio
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                More client projects live in private GitHub & Bitbucket repos
              </CardTitle>
              <CardDescription className="text-base">
                Some work stays private for NDA and company policy reasons. I can walk through code samples, architecture decisions, and automation flows on a quick call.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-wrap gap-3">
              <Button 
                asChild 
                className="shadow-glow"
              >
                <a href="mailto:melvinjose025@gmail.com?subject=Private%20portfolio%20walkthrough">
                  Request a walkthrough
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-primary/50 hover:border-primary"
              >
                <a href="https://github.com/MelvinjoseC" target="_blank" rel="noopener noreferrer">
                  View GitHub profile
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-border/70 hover:border-primary/60"
              >
                <a href="mailto:melvinjose025@gmail.com?subject=Bitbucket%20portfolio%20access">
                  Ask about Bitbucket work
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
