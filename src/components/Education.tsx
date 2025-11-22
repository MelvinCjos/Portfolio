import { GraduationCap, Award, Sparkles } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Mar Baselios Institute of Technology and Science",
    period: "2018 – 2021",
    grade: "CGPA: 6.3"
  },
  {
    degree: "Diploma",
    institution: "St. Mary's Institute of Technology & Science",
    period: "2015 – 2018",
    grade: "CGPA: 7.2"
  }
];

const certifications = [
  "Oracle Cloud Data Management 2023 Foundations Associate",
  "Oracle Machine Learning Using Autonomous Database 2023 Associate",
  "Complete Python Bootcamp – Udemy",
  "Python for Data Analysis & Visualization – Udemy",
  "Full-Stack Python Django with Angular – One Team Solutions",
  "AWS Solutions Architect Associate (Training Completed)"
];

export const Education = () => {
  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <div className="mb-12">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Academic Background</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Education</span>
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="glass-card-hover p-8 rounded-2xl group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex-shrink-0 group-hover:shadow-glow transition-all duration-500">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-gradient transition-all duration-300">{edu.degree}</h3>
                      <p className="text-primary text-base font-semibold mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground">{edu.period}</span>
                        <span className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="mb-12">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Professional Development</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-accent">Certifications</span>
              </h2>
            </div>

            <div className="glass-card-hover p-8 rounded-2xl">
              <ul className="space-y-5">
                {certifications.map((cert, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed pt-1">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};