import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Fusie Engineers Pvt Ltd",
    location: "Kochi, Kerala",
    period: "09/2024 – Present",
    responsibilities: [
      "Developing software solutions using Python, Django, JavaScript, and SQL",
      "Implementing automation systems for internal workflows and data processes",
      "Designing ETL components and ingestion workflows for reporting",
      "Creating Tkinter-based desktop automation tools for internal teams",
      "Building Python-based CAD automation utilities to reduce manual design tasks",
      "Integrating REST APIs and developing reusable backend modules",
      "Working with Docker, Jenkins, CI/CD pipelines, AWS EC2 & RDS for deployments",
      "Supporting DevOps processes including containerization, NGINX configs, debugging, and monitoring",
      "Using Terraform for IaC provisioning and managing cloud infrastructure"
    ]
  },
  {
    title: "Python Developer",
    company: "Fusie Engineers Pvt Ltd",
    location: "Kochi, Kerala",
    period: "09/2023 – 09/2024",
    responsibilities: [
      "Developed backend services using Django and Python microservices",
      "Integrated third-party APIs and implemented secure SSO authentication flows",
      "Designed reusable Python libraries and optimized SQL queries",
      "Deployed systems using Docker, NGINX, uWSGI on AWS EC2",
      "Built Tkinter desktop tools for workflow automation and productivity",
      "Implemented lightweight CAD automation scripts using Python",
      "Performed performance tuning and full-stack debugging"
    ]
  },
  {
    title: "Full-Stack (Python) Developer Intern",
    company: "One Team Solutions Edutech Pvt Ltd",
    location: "Remote",
    period: "12/2022 – 08/2023",
    responsibilities: [
      "Developed ERP modules using Python, Django, PostgreSQL, and SQLAlchemy",
      "Built REST APIs for payments, authentication, and user workflows",
      "Created React.js components for UI dashboards and forms",
      "Improved database performance using indexing & query optimization",
      "Automated tasks using n8n and Microsoft Power Automate",
      "Deployed applications on AWS EC2 using Docker containers",
      "Participated in Agile sprints, code reviews, and cross-functional collaboration"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Career Journey</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building production-ready systems and driving innovation
          </p>
        </div>

        <div className="relative">
          {/* Modern timeline line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node with glow */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background z-10 shadow-glow animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }}></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content card with enhanced styling */}
                <div className="md:w-1/2 ml-16 md:ml-0">
                  <div className="glass-card-hover p-8 rounded-2xl group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:shadow-glow transition-all duration-500">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">{exp.title}</h3>
                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-6 w-fit">
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.period}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="text-sm text-muted-foreground flex gap-3 group/item">
                          <span className="text-primary mt-1 group-hover/item:scale-125 transition-transform">▹</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};