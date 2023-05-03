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
      name: 'Projet 1 : Booki',
      description: "Un site pour trouver des hébergements et de trouver des activités réalisé à l'aide d'une maquette figma",
      image: Booki,
      url: 'https://minhajshafiq.github.io/Projet-2/',
      prolanguage: 'HTML & CSS',
    },
    {
      name: 'Projet 2 : Ohmyfood',
      description: 'Une application mobile first qui répertorie les menus des restaurants gastronomiques',
      image: ohmyfood,
      url: 'https://minhajshafiq.github.io/Projet-3/',
      prolanguage: 'HTML5 / SASS',
    },
    {
      name: 'Projet 3 : La Panthère',
      description: "Un site web d'une agence Web où j'ai grandement amélioré les perfomances de leur site Web, l'accéssibilité et le SEO",
      image: lapanthère,
      url: 'https://minhajshafiq.github.io/Projet-4/',
      prolanguage: 'HTML5 & CSS / SEO',
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
    {
        name: 'Projet 6 : Kasa',
        description: 'Une application web pour louer des appartements entre particulier',
        image: Kasa,
        url: 'https://minhajshafiq-kasa.netlify.app/',
        proglanguage:'React / SASS'
      },
  ];

  return (
    <main className='projects'>
      <h1 className='projects_title'>Mes projets</h1>
        <div className="projects_cards">
          <div className='projects_kasa'>
            <h2 className='projects_title'> Kasa : une application web de location immobilière </h2>
            <div className='projects_description'>
              <div className='projects_preview'>
              <div className='projects_languages-container'>
                  <span className='projects_languages'>SASS</span>
                  <span className='projects_languages'>React</span>
              </div>
                <img className='projects_img' src={projects[5].image} alt={projects[5].name} />
              </div>
              <div className='projects_details'>
                <p className='projects_txt'>{projects[5].description}</p>
                <div className='projects_button'>
                  <a href={projects[5].url}>
                    <Button label="Live Démo"/>
                  </a>
                  <a href={projects[5].code}>
                    <Button label="Code Source"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        



      {projects.map((project, index) => (
         <div key={index} className={`projects_card project_${index}`}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className='projects_img-display'>
                <img className='projects_img' src={project.image} alt={project.name} />
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