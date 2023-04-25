import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

import './header.scss';

function Header() {
  return (
    <div class="header">
        <div class="logo">
            <Link to="/">Accueil</Link>"<img src="img/logo/dark.png" alt="Minhaj"/>
        </div>
        <Navbar />
    </div>
  );
}

export default Header;