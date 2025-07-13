import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Technology - Computer Science & Engineering",
      organization: "University of Technology",
      location: "City, State",
      period: "2021 - 2025",
      description: "Relevant Coursework: Data Structures & Algorithms, Software Engineering, Machine Learning, Database Systems, Computer Networks, Operating Systems",
      achievements: ["GPA: 3.8/4.0", "Dean's List (3 semesters)", "Computer Science Society President"],
      icon: GraduationCap,
      color: "tech-blue"
    },
    {
      type: "work",
      title: "Software Engineering Intern",
      organization: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: ["Improved application performance by 30%", "Implemented 5 new features", "Mentored 2 junior interns"],
      icon: Briefcase,
      color: "tech-purple"
    },
    {
      type: "work",
      title: "Full-Stack Developer Intern",
      organization: "StartupXYZ",
      location: "City, State",
      period: "May 2023 - Aug 2023",
      description: "Built responsive web applications using modern JavaScript frameworks. Worked closely with UI/UX designers to implement pixel-perfect designs.",
      achievements: ["Led development of company's main product feature", "Reduced load time by 40%", "Contributed to open-source projects"],
      icon: Briefcase,
      color: "tech-green"
    },
    {
      type: "achievement",
      title: "HackTech 2024 - Winner",
      organization: "National Hackathon",
      location: "Tech City",
      period: "Mar 2024",
      description: "Led a team of 4 developers to create an AI-powered sustainability tracker. Won first place among 200+ teams.",
      achievements: ["$10,000 prize", "Mentorship opportunity", "Job interview offers"],
      icon: Trophy,
      color: "tech-purple"
    },
    {
      type: "achievement",
      title: "Open Source Contributor",
      organization: "Various Projects",
      location: "Remote",
      period: "2023 - Present",
      description: "Active contributor to open-source projects including React libraries and Python packages. Maintained multiple repositories with 1000+ stars.",
      achievements: ["500+ contributions", "50+ pull requests merged", "Community recognition"],
      icon: Trophy,
      color: "tech-blue"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'tech-blue': return 'border-tech-blue text-tech-blue';
      case 'tech-purple': return 'border-tech-purple text-tech-purple';
      case 'tech-green': return 'border-tech-green text-tech-green';
      default: return 'border-primary text-primary';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through education, professional experience, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 shadow-glow ${getColorClass(exp.color)}`}>
                    <exp.icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-primary mb-1">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground/80">
                            {exp.organization}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <Badge variant="secondary" className="w-fit">
                            <Calendar className="mr-1 h-3 w-3" />
                            {exp.period}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;