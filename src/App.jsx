import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'; // <-- Πρόσθεσε .jsx
import Hero from './components/Hero.jsx';     // <-- Πρόσθεσε .jsx
import About from './components/About.jsx';   // <-- Πρόσθεσε .jsx
import Projects from './components/Projects.jsx'; // <-- Πρόσθεσε .jsx
import Skills from './components/Skills.jsx';   // <-- Πρόσθεσε .jsx
import Contact from './components/Contact.jsx'; // <-- Πρόσθεσε .jsx
import Footer from './components/Footer.jsx';   // <-- Πρόσθεσε .jsx

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;