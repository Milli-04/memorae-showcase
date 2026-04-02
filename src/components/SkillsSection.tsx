const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Flask", "Express.js", "Tailwind CSS", "FastAPI", "LangChain"],
  },
  {
    title: "AI & Data",
    skills: ["LLMs", "RAG", "Agentic AI", "Generative AI", "Ollama", "Agno"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Linux", "Firebase", "MongoDB", "SQL", "Jupyter Notebook"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block glass-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            TECH STACK
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground/80 hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="glass-card p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">
              🎓 Education
            </h3>
            <p className="font-medium text-foreground">
              B.Tech in Computer Science & Engineering
            </p>
            <p className="text-sm text-muted-foreground">
              Vignan's Institute of Information Technology • 2022–2026
            </p>
            <p className="text-sm text-primary font-medium mt-1">CGPA: 8.92</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">
              🏆 Achievements
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                Web Development Lead at ACM Student Chapter (VIIT)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                Top 10 at SusHacks – National Hackathon
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                LeetCode – Top 39% with 4 badges
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                CodeChef – 2 Star Rating
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
