import React from 'react';
import './Contact.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';

const Contact = () => {
  const { ref, isVisible } = useReveal();
  return (
    <section id="contact" ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2>Let's Work Together</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="contact-cards">
          {/* --- Email Card --- */}
          <div className="contact-card">
            <FiMail size={40} className="contact-icon" />
            <h3>Email</h3>
            <p>Get in touch via email.</p>
            {/* Αυτό το link ανοίγει το προεπιλεγμένο πρόγραμμα email του χρήστη */}
            <a href="mailto:thanasisfyt@gmail.com">
              <button className="secondary-button">Send Email</button>
            </a>
          </div>

          {/* --- GitHub Card --- */}
          <div className="contact-card">
            <FiGithub size={40} className="contact-icon" />
            <h3>GitHub</h3>
            <p>Check out my repositories.</p>
            {/* Αυτό το link οδηγεί στο προφίλ σου στο GitHub */}
            <a href="https://github.com/fytilis" target="_blank" rel="noopener noreferrer">
              <button className="secondary-button">View Profile</button>
            </a>
          </div>

          {/* --- LinkedIn Card --- */}
          <div className="contact-card">
            <FiLinkedin size={40} className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>Let's connect professionally.</p>
            {/* Αυτό το link οδηγεί στο προφίλ σου στο LinkedIn */}
            <a href="https://www.linkedin.com/in/athanasios-fytilis-075812333/" target="_blank" rel="noopener noreferrer">
              <button className="secondary-button">Connect</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;