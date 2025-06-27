import React from 'react';


const About: React.FC = () => {
  const stats = [
    { number: '3+', label: 'Années d\'expérience' },
    { number: '4+', label: 'Projets réalisés' },
    { number: '0%', label: 'Client satisfaits' },
    { number: '24/7', label: 'Support disponible' }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Design UI/UX',
      description: 'Création d\'interfaces utilisateur modernes et intuitives'
    },
    {
      icon: '💻',
      title: 'Développement Web',
      description: 'Applications web responsives et performantes'
    },
    {
      icon: '📱',
      title: 'Applications Mobiles',
      description: 'Développement d\'apps cross-platform'
    },
    {
      icon: '🚀',
      title: 'Optimisation',
      description: 'Performance et SEO pour un meilleur référencement'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
            <p className="intro-text">
                Développeur web passionné depuis plus de 3 ans, je conçois des interfaces modernes et intuitives qui allient performance et créativité.
                <br></br>
                <br></br>
                Mon objectif : donner vie à vos idées à travers des solutions web sur mesure.
            </p>
              <p className="intro-text">
                Spécialisé dans les technologies modernes comme React, Node.js,
                et Html et Css,
                j'accompagne mes clients de la conception à la mise 
                en production de leurs projets web.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Approche centrée utilisateur</h4>
                  <p>Chaque projet commence par comprendre vos utilisateurs</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div>
                  <h4>Performance optimale</h4>
                  <p>Code propre, rapide et optimisé pour tous les appareils</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <span className="highlight-icon">🔧</span>
                <div>
                  <h4>Technologies de pointe</h4>
                  <p>Toujours à jour avec les dernières innovations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="services-section">
          <h3 className="services-title">Ce que je propose</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;