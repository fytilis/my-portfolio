import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div className={`group relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-2 ${
      featured ? 'shadow-glow' : 'shadow-lg'
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            Featured
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
            aria-label="View source code"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
            aria-label="View live demo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}