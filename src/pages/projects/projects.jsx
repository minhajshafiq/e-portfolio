import React from 'react';
import Button from '../../components/button/button.jsx';
import Booki from '../../assets/Booki.png';
import ohmyfood from '../../assets/ohmyfood.png';
import lapanthère from '../../assets/lapanthere.png';
import piiquante from '../../assets/piiquante.png';
import kanap from '../../assets/Kanap.jpg';
import Kasa from '../../assets/Kasa.png';

import './projects.scss';

function Projects() {
  const projects = [
    {
      name: 'Kasa : Une Application Web de location immobilière',
      description: 'Kasa est une application Web codé en React. Cette application permet de faire de la location entre particulier.',
      image: Kasa,
      url: 'https://minhajshafiq-kasa.netlify.app/',
      proglanguage:'React / SASS'
    },
    {
      name: "Booki : Un site d'hébergement de locations et activité",
      description: "Un site pour trouver des hébergements et de trouver des activités réalisé à l'aide d'une maquette figma",
      image: Booki,
      url: 'https://minhajshafiq.github.io/Projet-2/',
      prolanguage: 'HTML & CSS',
    },
    {
      name: 'Ohmyfood : Un répertoire de site gastronomiques',
      description: 'Une application mobile first qui répertorie les menus des restaurants gastronomiques',
      image: ohmyfood,
      url: 'https://minhajshafiq.github.io/Projet-3/',
      prolanguage: 'HTML / SASS',
    },
    {
      name: 'Projet 3 : La Panthère',
      description: "Un site web d'une agence Web où j'ai grandement amélioré les perfomances de leur site Web, l'accéssibilité et le SEO",
      image: lapanthère,
      url: 'https://minhajshafiq.github.io/Projet-4/',
      prolanguage: 'HTML & CSS / Opti SEO',
    },
    {
      name: 'Projet 4 : Kanap',
      description: 'Un site E-Commerce pour acheter des canapés',
      image: kanap,
      url: 'https://www.example.com',
      prolanguage: 'HTML & CSS / Javascript / API'
    },
    {
      name: 'Projet 5 : Piiquante',
      description: "Une application d'avis gastronomiques ou les utilisateurs peuvent crée, liker et dislike une sauce",
      image: piiquante,
      url: 'https://www.example.com',
      prolanguage:'HTML & CSS / API Rest / MongoDB / Express',
    },
  ];

  return (
    <main className='projects'>
      <h1 className='projects_maintitle'>Mes projets</h1>
        <div className="projects_cards">
          <div className='projects_kasa'>
            <h2 className='projects_title'>{projects[0].name}</h2>
            <div className='projects_description-kasa'>
              <div className='projects_preview'>
              <div className='projects_languages-container'>  
                  <span className='projects_languages'>React</span>
              </div>
                <img className='projects_img' src={projects[0].image} alt={projects[0].name} />
              </div>
              <div className='projects_details'>
                <p className='projects_txt'>{projects[0].description}</p>
                <div className='projects_button'>
                  <a href={projects[0].url}>
                    <Button label="Live Démo"/>
                  </a>
                  <a href={projects[0].code}>
                    <Button label="Code Source"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_ohmyfood'>
            <h2 className='projects_title'>{projects[2].name}</h2>
            <div className='projects_description-ohmyfood'>
              <div className='projects_preview'>
              <div className='projects_languages-container'>  
                  <span className='projects_languages'>SASS</span>
              </div>
                <img className='projects_img' src={projects[2].image} alt={projects[2].name} />
              </div>
              <div className='projects_details'>
                <p className='projects_txt'>{projects[2].description}</p>
                <div className='projects_button'>
                  <a href={projects[2].url}>
                    <Button label="Live Démo"/>
                  </a>
                  <a href={projects[2].code}>
                    <Button label="Code Source"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_kasa'>
            <h2 className='projects_title'>{projects[1].name}</h2>
            <div className='projects_description-kasa'>
              <div className='projects_preview'>
              <div className='projects_languages-container'>  
                  <span className='projects_languages'>HTML</span>
              </div>
                <img className='projects_img' src={projects[1].image} alt={projects[1].name} />
              </div>
              <div className='projects_details'>
                <p className='projects_txt'>{projects[1].description}</p>
                <div className='projects_button'>
                  <a href={projects[1].url}>
                    <Button label="Live Démo"/>
                  </a>
                  <a href={projects[1].code}>
                    <Button label="Code Source"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='projects_cards2'>
          {projects.slice(3).map((project, index) => (
            <div key={index} className={`projects_card project_${index + 3}`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h2 className='projects_title'>{project.name}</h2>
                <div className='projects_card-display'>
                  <img className='projects_card-img' src={project.image} alt={project.name} />
                </div>
              </a>
              <div className='projects_description'>
                <p>{project.description}</p>
                <p>Language utilisé : {project.prolanguage}</p>
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}

export default Projects;