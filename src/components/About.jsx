import React from 'react';
import './About.css';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p className="about-intro">
        I'm a Computer Science and Engineering student with a passion for building software that solves
        real problems. My journey in tech is driven by curiosity and the desire to create meaningful
        digital experiences.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <FaCode size={40} className="about-icon" />
          <h3>Clean Code</h3>
          <p>Writing maintainable, efficient, and elegant code is my craft.</p>
        </div>
        <div className="about-card">
          <FaLightbulb size={40} className="about-icon" />
          <h3>Problem Solver</h3>
          <p>Turning complex challenges into simple, innovative solutions.</p>
        </div>
        <div className="about-card">
          <FaRocket size={40} className="about-icon" />
          <h3>Fast Learner</h3>
          <p>Always exploring new technologies and pushing boundaries.</p>
        </div>
      </div>
    </section>
  );
};

export default About;