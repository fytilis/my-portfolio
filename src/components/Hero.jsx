import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">COMPUTER SCIENCE & ENGINEERING STUDENT</p>
        <h1 className="hero-title">
          Athanasios <span className="hero-title-blue">Fytilis</span>
        </h1>
        <p className="hero-description">
          Building elegant solutions through code. Passionate about creating
          innovative software that makes a difference.
        </p>
        <div className="hero-buttons">
          <a href="#projects"><button className="primary-button">View My Work</button></a>
          <a href="https://github.com/fytilis" target="_blank" rel="noopener noreferrer"><button className="secondary-button">GitHub Profile</button></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;