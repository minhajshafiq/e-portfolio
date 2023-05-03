import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './navbar.scss';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar_menu-icon" onClick={handleToggle}>
        <div className={`navbar_menu-icon__line ${isOpen ? 'open' : ''}`} />
        <div className={`navbar_menu-icon__line ${isOpen ? 'open' : ''}`} />
        <div className={`navbar_menu-icon__line ${isOpen ? 'open' : ''}`} />
      </div>
      <ul className={`navbar_links ${isOpen ? 'open' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={handleLinkClick}>
            Accueil
          </Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects" onClick={handleLinkClick}>
            Mes Projets
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={handleLinkClick}>
            À propos
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
      {isOpen && <div className="navbar_backdrop" onClick={handleToggle} />}
    </div>
  );
}

export default Navbar;