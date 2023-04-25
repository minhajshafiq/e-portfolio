import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

function Navbar() {
  return (
        <div class="navbar">
            <ul class="navbar_links">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">Mes Projets</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
  );
}

export default Navbar;