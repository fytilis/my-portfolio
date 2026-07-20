import React from 'react';
import './Skills.css';
import { useReveal } from '../hooks/useReveal';

const skillsData = {
  "Spoken Languages": [
    "English: Professional Working Proficiency (LRN C2, C1)",
    "Greek: Native Speaker",
    "German: A2 (still studying)",
  ],
  Programming: [
    "C/C++", "C#", "Python", "Java 17+", "TypeScript", "JavaScript", "Pthreads",
    "OpenGL", "MIPS Assembly", "PostgreSQL", "SQL Server", "MySQL", "H2 Database", "MATLAB",
  ],
  "Web/Frameworks": [
    "Spring Boot", "Spring Security", "Spring Data JPA", ".NET 10", "ASP.NET Core",
    "Entity Framework Core", "React 19", "Ionic", "Capacitor", "Zustand", "Redux Toolkit",
    "TailwindCSS", "SignalR", "HTML", "CSS",
  ],
  "Hardware Design": ["Verilog/SystemVerilog", "HLS C/C++", "VHDL", "Synopsys EDA Tools", "Modelsim"],
  Tools: [
    "Prompt Engineering", "GitHub", "Git", "Maven", "Docker", "Vite", "Thymeleaf", "Make",
    "LaTeX (Overleaf/Prism)", "Visual Studio Code", "Linux", "Windows",
    "Virtual Machines (VMware/VirtualBox)", "Insomnia", "Unity", "AutoCAD", "NI Multisim",
    "Microsoft Office", "Intel Advisor", "Mininet", "Electronic Circuits", "Eclipse",
  ],
};

const Skills = () => {
  const { ref, isVisible } = useReveal();
  return (
    <section id="skills" ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
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
      </div>
    </section>
  );
};

export default Skills;