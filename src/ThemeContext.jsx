import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Ξεκινάμε με 'light' ή παίρνουμε την προτίμηση του χρήστη από το localStorage
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Εφαρμόζουμε την κλάση 'light' ή 'dark' στο body του HTML
    document.body.className = theme;
    // Αποθηκεύουμε την επιλογή του χρήστη
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook για εύκολη χρήση
export const useTheme = () => useContext(ThemeContext);