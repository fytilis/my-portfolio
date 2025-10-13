import React from 'react';
import './Projects.css';

// Τροποποιούμε το ProjectCard για να δέχεται 'imageUrl' αντί για 'iconColor'
const ProjectCard = ({ title, description, tags, imageUrl, link }) => (
  <div className="project-card">
    {/* --- ΑΛΛΑΓΗ ΕΔΩ: Αντικαθιστούμε το div με ένα img tag --- */}
    <div className="project-image-container">
      <img src={imageUrl} alt={`${title} project thumbnail`} className="project-image" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tags">
      {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="secondary-button view-project-btn">View Project</button>
    </a>
  </div>
);


const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <p className="projects-subtitle">
        A selection of my recent work. Check out my{' '}
        <a href="https://github.com/fytilis" target="_blank" rel="noopener noreferrer">GitHub profile</a> for more projects.
      </p>
      <div className="projects-grid">
        {/* --- Project 1: Internship Management App --- */}
        <ProjectCard 
          title="Internship Management App"
          description="A web application for managing student internships, connecting students, companies, and university staff."
          tags={['Java', 'Spring Boot', 'JavaScript']}
          imageUrl="/internship.jpg" // <-- Βάζουμε το όνομα της εικόνας
          link="https://github.com/fytilis/internship-management-app"
        />
        {/* --- Project 2: Operating Systems --- */}
        <ProjectCard 
          title="Operating Systems (MYY601)"
          description="Implementation of core operating systems concepts, such as process scheduling and synchronization, in C."
          tags={['C', 'Linux', 'Pthreads']}
          imageUrl="/operating.jpg" // <-- Βάζουμε το όνομα της εικόνας
          link="https://github.com/fytilis/Operating-Systems-MYY601"
        />
        {/* --- Project 3: Compiler --- */}
        <ProjectCard 
          title="Compiler Construction (MYY802)"
          description="A compiler for a custom programming language, built using Flex and Bison for lexical analysis and parsing."
          tags={['C', 'Flex', 'Bison']}
          imageUrl="/compiler.jpg" // <-- Βάζουμε το όνομα της εικόνας
          link="https://github.com/fytilis/Compiler-MYY802"
        />
      </div>
    </section>
  );
};

export default Projects;