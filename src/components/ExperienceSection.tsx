import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "CodeMate.ai",
    role: "Associate Software Developer",
    period: "July 2025 – Present",
    location: "Remote",
    highlights: [
      "Owned the complete education platform end-to-end from development to deployment",
      "Built offline client-server app leveraging on-device LLMs powered by Ollama",
      "Integrated LLM-driven workflows for automated task generation & content summarization",
    ],
  },
  {
    company: "Hi Devs",
    role: "Full Stack Developer Intern",
    period: "May 2025 – July 2025",
    location: "Remote",
    highlights: [
      "Integrated RESTful APIs with React hooks and Axios for seamless data flow",
      "Built dynamic post creation interface with tone selection & keyword suggestions",
      "Designed interactive UI components promoting modular, reusable code",
    ],
  },
  {
    company: "Aegion Dynamic Solution",
    role: "Frontend Developer Intern",
    period: "July 2024 – October 2024",
    location: "Remote",
    highlights: [
      "Built responsive, accessible web interfaces across multiple browsers & devices",
      "Developed reusable UI components optimizing maintainability & performance",
      "Implemented SEO strategies enhancing search visibility & page load efficiency",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block glass-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            CAREER JOURNEY
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="glass-card p-6 md:p-8 md:ml-16 relative group hover:scale-[1.01] transition-transform duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.55rem] top-8 w-4 h-4 rounded-full bg-primary hidden md:block ring-4 ring-background" />

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
