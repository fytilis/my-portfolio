import React from 'react';
import './About.css';
import { useReveal } from '../hooks/useReveal';

const About = () => {
  const { ref, isVisible } = useReveal();
  return (
    <section id="about" ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2>About Me</h2>
        <p className="about-intro">
          I am a Computer Science and Engineering student who thrives at the exact intersection of
          hardware and software. While my journey in tech started with a general curiosity about how
          things work, it quickly evolved into a passion for systems engineering.
        </p>
        <p className="about-intro">
          I specialize in bridging domains that usually stay separate. Whether I am designing custom
          testing architectures in VHDL at the Register-Transfer Level, or developing scalable network
          APIs to handle real-time data, my goal remains the same: to build complete, reliable systems.
          I am driven by the challenge of taking low-level hardware constraints and transforming them
          into accessible, high-level software solutions.
        </p>
      </div>
    </section>
  );
};

export default About;