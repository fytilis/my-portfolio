import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90, category: "Frontend" },
    { name: "React/Next.js", level: 85, category: "Frontend" },
    { name: "Python", level: 88, category: "Backend" },
    { name: "Java", level: 82, category: "Backend" },
    { name: "Spring Boot", level: 78, category: "Backend" },
    { name: "SQL/NoSQL", level: 80, category: "Database" },
    { name: "Machine Learning", level: 75, category: "AI/ML" },
    { name: "Data Structures & Algorithms", level: 90, category: "CS Fundamentals" }
  ];

  const interests = [
    { icon: Code, title: "Full-Stack Development", desc: "Building end-to-end web applications" },
    { icon: Brain, title: "Artificial Intelligence", desc: "Machine learning and deep learning" },
    { icon: Database, title: "Database Design", desc: "Optimizing data storage and retrieval" },
    { icon: Globe, title: "Open Source", desc: "Contributing to community projects" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student with a love for solving complex problems through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I'm a Computer Science and Engineering student at [University Name], 
                passionate about creating innovative solutions that make a real impact. 
                My journey began with curiosity about how technology shapes our world.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Currently pursuing my degree with a focus on software engineering and 
                artificial intelligence. I love tackling challenging problems and 
                turning ideas into functional, elegant solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                participating in hackathons, or exploring the latest tech trends.
              </p>
            </CardContent>
          </Card>

          {/* Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Areas of Interest</h3>
            <div className="grid gap-4">
              {interests.map((interest, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-colors group">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <interest.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{interest.title}</h4>
                        <p className="text-sm text-muted-foreground">{interest.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <Card className="bg-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress value={skill.level} className="h-2" />
                    <div className="text-right text-sm text-muted-foreground">
                      {skill.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;