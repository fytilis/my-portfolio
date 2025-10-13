import React from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle.jsx'; // <-- IMPORT ΕΔΩ

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AF</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a 
            href="/Athanasios-Fytilis-CV.pdf" 
            download="Athanasios-Fytilis-CV.pdf"
            className="github-button"
          >
            CV
          </a>
        </li>
        <li><ThemeToggle /></li> {/* <-- ΠΡΟΣΘΗΚΗ ΕΔΩ */}
      </ul>
    </nav>
  );
};

export default Navbar;