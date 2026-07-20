import React from 'react';
import './Footer.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Athanasios Fytilis. All rights reserved.</p>
        <div className="footer-socials">
          <a href="mailto:thanasisfyt@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
          <a href="https://github.com/fytilis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/athanasios-fytilis-075812333/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;