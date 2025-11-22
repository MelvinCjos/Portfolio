import { Badge } from "./ui/badge";
import { Code2, Database, Cloud, Wrench, Server, Boxes } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "Bash", "JavaScript", "Linux"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Boxes,
    skills: ["Django", "SQLAlchemy", "Pandas", "NumPy", "Tkinter", "React.js"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["ETL/ELT", "Data Modeling", "Warehousing", "API Data Extraction", "Data Validation"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "NoSQL"]
  },
  {
    title: "Automation",
    icon: Wrench,
    skills: ["n8n", "Power Automate", "Python CAD Automation", "Tkinter Tools"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "AWS RDS", "S3", "Docker", "Jenkins", "NGINX", "uWSGI", "CI/CD", "Git", "BigQuery"]
  },
  {
    title: "Infrastructure-as-Code",
    icon: Server,
    skills: ["Terraform", "AWS Automation", "IaC Provisioning"]
  },
  {
    title: "Other",
    icon: Wrench,
    skills: ["Agile", "Requirements Analysis", "System Design", "Documentation"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden bg-muted/30">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tech Stack</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern tools and technologies for building robust solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="glass-card-hover p-8 rounded-2xl group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:shadow-glow transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="px-3 py-1.5 bg-secondary/60 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default border border-border/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};