export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 75 },
        { name: 'Next.js', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Html', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 90 },
        { name: 'MySQL/H2', level: 85 },
        { name: 'Spring Security', level: 95 },
        { name: 'Spring Boot', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Testing', level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications & Education</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Undergraduate Students Computer Engineering(Polytechnic school,Masters Degree)',
            ].map((cert) => (
              <div
                key={cert}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}