import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer_copyright">
           Copyright &copy; 2023
        </div>
        <div className="footer_links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
      </div>

    </footer>
  );
}

export default Footer;