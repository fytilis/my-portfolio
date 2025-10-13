import React from 'react';
import './Skills.css';

const skillsData = {
  Languages: ["JavaScript", "Python", "Java", "C++", "TypeScript", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
  Backend: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL"],
  Tools: ["Git", "Docker", "Linux", "AWS", "REST APIs", "GraphQL"],
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <p className="skills-subtitle">A diverse toolkit built through hands-on experience and continuous learning.</p>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;