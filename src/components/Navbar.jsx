import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle.jsx';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">AF</div>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={closeMenu}
              className={activeId === id ? 'active' : ''}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/CV_FYTILIS_THANASIS.pdf"
            download="CV_FYTILIS_THANASIS.pdf"
            className="github-button"
            onClick={closeMenu}
          >
            CV
          </a>
        </li>
        <li className="navbar-theme"><ThemeToggle /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
