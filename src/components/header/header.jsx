import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';   
import Navbar from '../navbar/navbar';

import './header.scss';

function Header() {
  return (
    <header className="header">
        <div className="header_logo">
            <Link to="/"><img src={logo} className='header_logo_img' alt="Minhaj"/></Link>
        </div>
          <Navbar />
        <span></span>
    </header>
  );
}

export default Header;