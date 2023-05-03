import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from '../../components/button/button.jsx';
import './home.scss';
import resume from "../../assets/CVZubairMinhaj.pdf";
import profilePicture from '../../assets/profilepic.jpg';
import Typing from 'react-typing-effect';

function Home() {
  return (
    <main className='home'>
        <div className="home_profile">
          <img src={profilePicture} alt="Ma tête" className="home_picture" />
          <div className="home_description">
            <p className='home_welcome'>Bienvenue sur mon portfolio !</p>
            <h1 className='home_title'>Hello! I'm Minhaj Shafiq 🖐</h1>
            <h2 className='home_animatedtxt'><Typing speed={50} text="Développeur Web" /></h2>
            <div className='home_txt'>
              <p>Je suis un développeur Web qui aimerai pouvoir approfondir ses connaissances pour devenir Développeur Front-End spécialisé avec le framework React</p>
              <p>Je suis donc à la recherche d'une alternance en tant que développeur Front-End React / Développeur Mobile</p>
            </div>
            <div className='home_links'>
              <a className='home_links_resumebtn' href={resume} download>
                <Button label="Télécharger mon CV"/>
              </a>
            <div className='home_links_socials'>
              <a href="https://www.linkedin.com/in/minhajshafiq/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='home_links_socials_icon'/>
              </a>

              <a href="https://github.com/minhajshafiq" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='home_links_socials_icon'/>
              </a>
            </div>
            </div>
          </div>
        </div>
    </main>
  );
}

export default Home;