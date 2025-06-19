import React, { useState } from 'react';
import { Project } from '../../types/types';
import './Projects.scss';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec système de paiement intégré, gestion des stocks et interface d\'administration avancée.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      image: '/api/placeholder/600/400',
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/username/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec temps réel, notifications push et intégration calendrier.',
      tech: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      link: 'https://example-taskapp.com',
      github: 'https://github.com/username/task-app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard météo interactif avec prévisions détaillées, cartes interactives et alertes personnalisées.',
      tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      image: '/api/placeholder/600/400',
      link: 'https://example-weather.com',
      github: 'https://github.com/username/weather-app'
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'Système de gestion de contenu pour blogs avec éditeur WYSIWYG, système de commentaires et SEO optimisé.',
      tech: ['Next.js', 'Prisma', 'TailwindCSS', 'Vercel'],
      image: '/api/placeholder/600/400',
      link: 'https://example-blog.com',
      github: 'https://github.com/username/blog-cms'
    },
    {
      id: 5,
      title: 'Portfolio Creative',
      description: 'Portfolio créatif pour artiste avec galerie interactive, animations 3D et système de contact avancé.',
      tech: ['Three.js', 'GSAP', 'Nuxt.js', 'SCSS'],
      image: '/api/placeholder/600/400',
      link: 'https://example-portfolio.com',
      github: 'https://github.com/username/creative-portfolio'
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Dashboard d\'analyse de données en temps réel avec graphiques interactifs et export de rapports.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
      image: '/api/placeholder/600/400',
      link: 'https://example-analytics.com',
      github: 'https://github.com/username/analytics-dashboard'
    }
  ];

  const techCategories = ['all', 'React', 'Vue.js', 'Next.js', 'Node.js', 'Python'];

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

