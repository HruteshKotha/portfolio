import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled, handleSmoothScroll }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onNavClick = (e, targetId) => {
    setMenuOpen(false);
    handleSmoothScroll(e, targetId);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={(e) => onNavClick(e, '#hero')}>
          Hru<span>tesh</span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#about" onClick={(e) => onNavClick(e, '#about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => onNavClick(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => onNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => onNavClick(e, '#experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`ph ${menuOpen ? 'ph-x' : 'ph-list'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
