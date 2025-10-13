import React from 'react';
import { useTheme } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="mui-switch">
      <input 
        type="checkbox" 
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      {/* Ο slider είναι πλέον μόνο το track */}
      <span className="mui-slider"></span>
      {/* Το thumb είναι ξεχωριστό και περιέχει τα εικονίδια */}
      <span className="mui-thumb">
        <span className="sun-icon"><FaSun /></span>
        <span className="moon-icon"><FaMoon /></span>
      </span>
    </label>
  );
};

export default ThemeToggle;