import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Brain, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard. Built with modern web technologies and deployed on cloud infrastructure.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      category: "Full-Stack",
      icon: Code,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "AI Image Classifier",
      description: "Deep learning model for image classification using convolutional neural networks. Trained on custom dataset with 95% accuracy for multi-class classification.",
      image: "🤖",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      category: "Machine Learning",
      icon: Brain,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management application with real-time collaboration, push notifications, and offline functionality.",
      image: "📱",
      tech: ["React Native", "Firebase", "Redux", "Push Notifications"],
      category: "Mobile",
      icon: Smartphone,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Database Optimizer",
      description: "Tool for analyzing and optimizing database queries with performance metrics, indexing suggestions, and query optimization recommendations.",
      image: "⚡",
      tech: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Docker"],
      category: "Backend",
      icon: Database,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Real-time Chat System",
      description: "Scalable real-time messaging application with WebSocket connections, message encryption, and file sharing capabilities.",
      image: "💬",
      tech: ["Socket.io", "Node.js", "React", "Redis", "JWT"],
      category: "Full-Stack",
      icon: Code,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application for visualizing sorting and graph algorithms with step-by-step animations and customizable parameters.",
      image: "📊",
      tech: ["JavaScript", "D3.js", "HTML5 Canvas", "CSS3"],
      category: "Educational",
      icon: Code,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <CardTitle className="text-xl text-primary group-hover:text-tech-blue transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <project.icon className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">{project.image}</div>
                    <project.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-tech-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm text-foreground/70 line-clamp-2">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
