import React from 'react';
import './Projects.css';
import { useReveal } from '../hooks/useReveal';

const ProjectCard = ({ title, description, tags, imageUrl, link }) => (
  <div className="project-card">
    <div className="project-image-container">
      {imageUrl ? (
        <img src={imageUrl} alt={`${title} project thumbnail`} className="project-image" />
      ) : (
        <div className="project-image-placeholder">
          <span>{title}</span>
        </div>
      )}
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
  const { ref, isVisible } = useReveal();
  return (
    <section id="projects" ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">
          A selection of my recent work. Check out my{' '}
          <a href="https://github.com/fytilis" target="_blank" rel="noopener noreferrer">GitHub profile</a> for more projects.
        </p>
        <div className="projects-grid">
          {/* --- Project 1: JTAG & BIST SoC Testing Infrastructure --- */}
          <ProjectCard
            title="JTAG & BIST SoC Testing Infrastructure"
            description="This VHDL-based project combines IEEE 1149.1 JTAG and BIST architectures to provide a complete System-on-Chip testing infrastructure for efficient fault detection and internal logic isolation."
            tags={['VHDL 2008', 'ModelSim', 'Quartus']}
            imageUrl="/jtag-bist.jpg"
            link="https://github.com/fytilis/JTAG-BIST-SoC-Testing-Infrastructure"
          />
          {/* --- Project 2: Food Hazard Detection Challenge --- */}
          <ProjectCard
            title="Food-Hazard-Detection-Challenge"
            description="Developed for the SemEval-2025 challenge, this text classification system utilizes a highly optimized LinearSVC pipeline with transductive TF-IDF to accurately predict food hazard and product categories from recall reports."
            tags={['Python', 'Jupyter Notebook']}
            imageUrl="/food-hazard-detection.jpg"
            link="https://github.com/fytilis/Food-Hazard-Detection-Challenge"
          />
          {/* --- Project 3: Internship Management App --- */}
          <ProjectCard
            title="Internship Management App"
            description="A web application for managing student internships, connecting students, companies, and university staff."
            tags={['Java', 'Spring Boot', 'HTML', 'CSS']}
            imageUrl="/internship.jpg" // <-- Βάζουμε το όνομα της εικόνας
            link="https://github.com/fytilis/internship-management-app"
          />
          {/* --- Project 4: Operating Systems --- */}
          <ProjectCard
            title="Operating Systems (MYY601)"
            description="Implementation of core operating systems concepts, such as process scheduling and synchronization, in C."
            tags={['C', 'Linux', 'Pthreads']}
            imageUrl="/operating.jpg" // <-- Βάζουμε το όνομα της εικόνας
            link="https://github.com/fytilis/Operating-Systems-MYY601"
          />
          {/* --- Project 5: Compiler --- */}
          <ProjectCard
            title="Compiler Construction (MYY802)"
            description="A compiler for a custom programming language, built in Python and targeting RISC-V assembly."
            tags={['Python', 'Assembly', 'RISC-V']}
            imageUrl="/compiler.jpg" // <-- Βάζουμε το όνομα της εικόνας
            link="https://github.com/fytilis/Compiler-MYY802"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;