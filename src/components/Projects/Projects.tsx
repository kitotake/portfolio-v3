import React, { useState } from 'react';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Booki',
      description: 'Plateforme de réservation de logements et de Activités',
      tech: ['Html', 'Css'],
      image: 'https://i.imgur.com/KDcZGi6.png',
      link: 'https://kitotake.github.io/booki/',
      github: 'https://github.com/kitotake/booki'
     
    },
    {
      id: 2,
      title: 'Ohmyfood',
      description: 'Ohmyfood est un site web mobile-first permettant aux utilisateurs de consulter et précommander des menus gastronomiques de restaurants haut de gamme à Paris.',
      tech: ['HTML', 'CSS', 'Sass', 'Node.js'],
      image: 'https://i.imgur.com/trV0wSx.png',
      link: 'https://kitotake.github.io/Ohmyfood/',
      github: 'https://github.com/kitotake/Ohmyfood'
      
    },
    {
      id: 3,
      title: 'Riding-Citites',
      description: 'Riding Cities est une application web qui permet aux utilisateurs de consulter, comparer et explorer des services de mobilité urbaine (vélos, trottinettes...) dans différentes grandes villes.',
      tech: [ 'Html', 'Css'],
      image: 'https://i.imgur.com/GnjCFZR.png',
      link: 'https://kitotake.github.io/Riding-Citites/',
      github: 'https://github.com/kitotake/Riding-Citites'
    },
    {
      id: 4,
      title: 'Print-it',
      description: 'Print-it est un projet de site vitrine pour une entreprise spécialisée dans l’impression en ligne.',
      tech: ['Html', 'Css', 'Javascript'],
      image: 'https://i.imgur.com/rzKnzBX.png',
      link: 'https://kitotake.github.io/Print-it/',
      github: 'https://github.com/kitotake/Print-it'
     },
     {
      id: 5,
      title: 'Fleurs Vitrine',
      description: 'Présentation soignée de bouquets et compositions florales, alliant élégance, couleurs et raffinement.',
      tech: ['Html', 'Css', 'Javascript', 'SCSS'],
      image: 'https://i.imgur.com/ZGEs6Ym.png',
      link: 'https://kitotake.github.io/fleurs/',
      github: 'https://github.com/kitotake/fleurs',
      featured: true
    },
     {
       id: 6,
       title: 'Favorie de anime / film [faut que je corrige le deploiment du ptoject mais tout est goods] ',
       description: 'Catalogue personnalisé d’animes et films favoris, alliant simplicité, rapidité et plaisir de visionnage.',
       tech: ['Html', 'Css', 'Javascript'],
       image: 'https://i.imgur.com/XiPHHgb.png',
       link: 'https://kitotake.github.io/anime-fav/',
       github: 'https://github.com/kitotake/anime-fav',
       featured: true
     },
    
    // {
    //   id: 6,
    //   title: 'Analytics Dashboard',
    //   description: 'Dashboard d\'analyse de données en temps réel avec graphiques interactifs et export de rapports.',
    //   tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
    //   image: '/api/placeholder/600/400',
    //   link: 'https://example-analytics.com',
    //   github: 'https://github.com/username/analytics-dashboard'
    // }
  ];

  const techCategories = ['all', 'React', 'Vue.js', 'Next.js', 'Node.js', 'Html'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tech.includes(filter));

  const featuredProjects = projects.filter(project => project.featured);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="projects-intro">
          <p>
            Découvrez une sélection de mes réalisations les plus récentes. 
            Chaque projet reflète ma passion pour le code propre, l'innovation 
            et l'expérience utilisateur exceptionnelle.
          </p>
        </div>

        {/* Projets Featured */}
        <div className="featured-section">
          <h3 className="featured-title">🌟 Projets Phares</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="featured-card"
                onClick={() => openProjectModal(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <button className="view-btn">
                        <span>Voir le projet</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-more">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres */}
        <div className="projects-filters">
          {techCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    
        {/* Modal Projet */}
        {selectedProject && (
          <div className="project-modal" onClick={closeProjectModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeProjectModal}>
                &times;
              </button>
              <h3>{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p>{selectedProject.description}</p>
              <div className="modal-tech">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="modal-actions">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="action-btn">
                  Voir le projet [site]
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                  Code source du projet
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
