import React from 'react';
import './about.scss';

function About() {
  const education = [
    {
      institution: 'OpenClassrooms',
      degree: "Développeur d'applications - Javascript React Alternance (à venir)",
      startDate: 'Aout 2023',
      endDate: 'Mars 2025',
    },
    {
      institution: 'OpenClassrooms',
      degree: 'Développeur Web',
      startDate: 'Aout 2022',
      endDate: 'Mars 2023',
    },
  ];

  const hardSkills = [
    { name: 'HTML & CSS', percentage: 100 },
    { name: 'Javascript', percentage: 70 },
    { name: 'React', percentage: 65 },
    { name: 'Angular', percentage: 40 },
    { name: 'Tailwind', percentage: 30 },
  ];  

  return (
    <div className="about">
      <div className='about-texts'>
          <div className='about-me'>
          <h1>À propos de moi</h1>
            <p>Je suis passionné par le développement web depuis plusieurs années maintenant. <br></br>
              Je suis récemment diplômé en Développement Web et j'aimerai approfondir mes compétences pour pouvoir devenir développeur Front End. <br></br>
              J'aime explorer les différentes technologies et tendances du domaine pour rester à jour et améliorer mes compétences. <br></br>
              Mon coup de cœur va pour le framework React. J'apprécie particulièrement la modularité de React, qui permet de créer des composants réutilisables et ainsi accélérer le développement de projets. <br></br>
              J'apprend également d'autres frameworks tels que Angular ainsi qu'avec des outils de développement comme Git, Figma ou Webpack. <br></br>
              Je suis convaincu que la passion et l'enthousiasme que j'ai pour le développement web me permettent de fournir des résultats de qualité. <br></br>
              Si vous cherchez un alternant motivé et compétent pour vos projets de développement web, n'hésitez pas à me contacter.<br></br>
              Je serais ravi de mettre mes connaissances et mes compétences pour contribuer au succès de vos projets et acquérir une expérience professionnelle de qualité.
            </p>
          </div>
          
          <div className='about-compagny'>
          <h2>Avantages pour vous à me recruter</h2>
            <p>Voici quelques-uns des avantages que je peux apporter à votre entreprise :</p>
            <ul>
              <li>Mes frais de scolarité peuvent être pris en charge par l'OPCO</li>
              <li>Bénéficiez d'une aide de 6000e la 1ère année</li>
              <li>Des exonérations de cotisations</li>
              <li>Mon salaire serait sur la base d'un SMIC</li>
              <li>Mes compétences seront enrichies selons les besoins de votre entreprises</li>
            </ul>
          </div>
      </div>

      <div className='my-experience'>
  <div className='about_formation'>
    <h2>Mes Formations</h2>
    {education.map((item, index) => (
      <div key={index} className="formation-item">
        <div className="formation-badge">
          <p>{item.startDate}</p>
          <p>{item.endDate}</p>
        </div>
        <div className="formation-info">
          <p className="institution">{item.institution}</p>
          <p className="degree">{item.degree}</p>
        </div>
      </div>
    ))}
  </div>

  <div className='about_hardskill'>
  <h2>Mes Compétences techniques</h2>
  <ul>
    {hardSkills.map((skill, index) => (
      <li key={index}>
        <div className="skill">
          <span>{skill.name}</span>
        </div>
        <div className="bar-container">
          <div className="bar" style={{ width: skill.percentage + '%' }}>
            <div className="progress" style={{ width: skill.percentage + '%' }}>
              <span className="sr-only">{skill.percentage}%</span>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>


    </div>
  </div>
  );
}

export default About;