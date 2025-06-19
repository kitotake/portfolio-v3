import React, { useEffect, useState } from 'react';


const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    'Développeur Full Stack',
    'Créateur d\'Expériences',
    'Passionné de Code',
    'Innovateur Digital'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRoleIndex, roles]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">👋 Salut, je suis</p>
            <h1 className="hero-name">
              <span className="first-name">Votre</span>
              <span className="last-name">Nom</span>
            </h1>
            <div className="hero-role">
              <span className="role-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Je crée des expériences web modernes et performantes. 
              Passionné par les technologies de pointe et l'innovation, 
              je transforme vos idées en solutions digitales exceptionnelles.
            </p>
            
            <div className="hero-cta">
              <button 
                className="btn btn-primary"
                onClick={scrollToProjects}
              >
                <span>Voir mes projets</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                className="btn btn-secondary"
                onClick={scrollToContact}
              >
                <span>Me contacter</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="tech-icons">
                <div className="tech-icon">⚛️</div>
                <div className="tech-icon">🐍</div>
                <div className="tech-icon">💻</div>
                <div className="tech-icon">🚀</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll pour découvrir</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;