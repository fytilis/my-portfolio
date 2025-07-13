import { ProjectCard } from './ProjectCard'

// This would typically come from your API
async function getProjects() {
  // Simulate API call
  return [
    {
      id: 1,
      title: 'Greek++ compiler',
      description: 'A complete, multi-stage compiler for the educational programming language Greek++. The compiler is written entirely in Python and translates Greek++ source code into assembly for the RISC-V architecture.',
      image: '/opa.jpg',
      technologies: ['Python', 'Assembly'],
      githubUrl: 'https://github.com/fytilis/Compiler-MYY802',
      liveUrl: 'https://github.com/fytilis/Compiler-MYY802',
      featured: true
    },
    {
      id: 2,
      title: 'Internship Management App',
      description: 'A full-stack web application built with Spring Boot for managing student internships. The system supports students, professors, company representatives, and an internship committee, offering complete functionality from application submission to final evaluation.',
      image: '/intern.jpg',
      technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA','Maven','Themeleaf','MySQL/H2 Database'],
      githubUrl: 'https://github.com/fytilis/internship-management-app',
      liveUrl: 'https://github.com/fytilis/internship-management-app',
      featured: true
    },
    {
      id: 3,
      title: 'Oparating Systems',
      description: 'This project enhances a basic Log-Structured Merge-tree (LSM-tree) based key-value storage engine with multithreaded capabilities, enabling it to handle concurrent read and write operations safely and efficiently.',
      image: '/2202764.jpg',
      technologies: ['C'],
      githubUrl: 'https://github.com/fytilis/Operating-Systems-MYY601',
      liveUrl: 'https://github.com/fytilis/Operating-Systems-MYY601',
      featured: false
    },
    {
      id: 4,
      title: 'AI project',
      description: 'This repository contains projects developed for an Artificial Intelligence course, focusing on classic search algorithms and game theory.',
      image: '/ai.jpg',
      technologies: ['Java 17'],
      githubUrl: 'https://github.com/fytilis/artificial-intelligence-project',
      liveUrl: 'https://github.com/fytilis/artificial-intelligence-project',
      featured: false
    }
  ]
}

export async function ProjectList() {
  const projects = await getProjects()
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative web applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Other Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          
        <a
          href="https://github.com/fytilis" // <-- Βάλτε εδώ το URL του GitHub σας
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View All Projects
        </a>    
        </div>
      </div>
    </section>
  )
}