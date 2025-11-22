export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Summary</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6 text-lg leading-relaxed">
          <p>
            Software Developer with expertise in <strong className="text-primary">Python backend development</strong>, 
            <strong className="text-primary"> workflow automation</strong>, 
            <strong className="text-primary"> cloud deployment</strong>, 
            <strong className="text-primary"> Infrastructure-as-Code (Terraform)</strong>, and 
            <strong className="text-primary"> data engineering concepts</strong>.
          </p>
          
          <p>
            Experienced in building <strong>scalable APIs</strong>, automating business workflows, 
            integrating systems, and deploying applications using <strong>AWS</strong> and <strong>Docker</strong>. 
            Skilled in SQL, cloud platforms, DevOps tools, and ETL processes.
          </p>

          <p>
            Hands-on experience with automation systems including <strong>n8n</strong> and 
            <strong> Microsoft Power Automate</strong>, CAD process automation using Python, 
            frontend development using <strong>React.js</strong>, and desktop application 
            development using <strong>Tkinter</strong>.
          </p>

          <p className="text-primary font-semibold">
            Strong ability to analyze requirements, build optimized systems, and collaborate 
            with teams to deliver high-quality, production-ready solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-4 text-base">
            <div className="glass-card p-5 rounded-xl border border-border/60 space-y-2">
              <h4 className="font-semibold">What I ship</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                <li>Production-ready APIs, data pipelines, and workflow automations.</li>
                <li>Deployment stacks with Docker, CI/CD, and IaC for repeatable releases.</li>
                <li>Observability, logging, and validation baked in from day one.</li>
              </ul>
            </div>
            <div className="glass-card p-5 rounded-xl border border-border/60 space-y-2">
              <h4 className="font-semibold">How I work</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                <li>Deep requirements mapping before build, with clear architecture notes.</li>
                <li>Short feedback loops, async updates, and demos to keep stakeholders aligned.</li>
                <li>Security-first mindset; comfortable collaborating under NDA constraints.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
