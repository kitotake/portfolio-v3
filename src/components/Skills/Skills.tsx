import React, { useState, useEffect } from 'react';
import { Skill } from '../../types/types';
import './Skills.scss';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, icon: '⚛️', category: 'frontend' },
    { name: 'TypeScript', level: 90, icon: '🔷', category: 'frontend' },
    { name: 'Next.js', level: 85, icon: '▲', category: 'frontend' },
    { name: 'Vue.js', level: 80, icon: '💚', category: 'frontend' },
    { name: 'SCSS', level: 95, icon: '🎨', category: 'frontend' },
    { name: 'Tailwind', level: 90, icon: '🌊', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 88, icon: '🟢', category: 'backend' },
    { name: 'Python', level: 92, icon: '🐍', category: 'backend' },
    { name: 'Express.js', level: 85, icon: '🚂', category: 'backend' },
    { name: 'Django', level: 80, icon: '🎸', category: 'backend' },
    { name: 'MongoDB', level: 85, icon: '🍃', category: 'backend' },
    { name: 'PostgreSQL', level: 88, icon: '🐘', category: 'backend' },
    
    // Design
    { name: 'Figma', level: 90, icon: '🎯', category: 'design' },
    { name: 'Adobe XD', level: 85, icon: '🔸', category: 'design' },
    { name: 'Photoshop', level: 75, icon: '🖼️', category: 'design' },
    { name: 'Illustrator', level: 70, icon: '✨', category: 'design' },
    
    // Tools
    { name: 'Git', level: 95, icon: '📝', category: 'tools' },
    { name: 'Docker', level: 80, icon: '🐳', category: 'tools' },
    { name: 'AWS', level: 75, icon: '☁️', category: 'tools' },
    { name: 'Webpack', level: 85, icon: '📦', category: 'tools' }
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'design', name: 'Design', icon: '🎯' },
    { id: 'tools', name: 'Outils', icon: '🛠️' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setAnimatedSkills(prev => new Set([...prev, skillName]));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('.skill-item');
    skillElements.forEach(el => observer.observe(el));

    return () => {
      skillElements.forEach(el => observer.unobserve(el));
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        
        <div className="skills-intro">
          <p>
            Une expertise technique solide acquise à travers des projets variés 
            et une veille technologique constante. Voici un aperçu de mes compétences 
            dans différents domaines du développement web.
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${activeCategory}`}
              className="skill-item"
              data-skill={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              
              <div className="skill-bar">
                <div
                  className={`skill-progress ${
                    animatedSkills.has(skill.name) ? 'animated' : ''
                  }`}
                  style={{
                    '--skill-level': `${skill.level}%`,
                    '--animation-delay': `${index * 0.1}s`
                  } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>🚀 Toujours en apprentissage</h3>
            <p>
              Je me forme continuellement aux nouvelles technologies et méthodologies 
              pour rester à la pointe de l'innovation web.
            </p>
          </div>
          
          <div className="summary-card">
            <h3>🎯 Focus qualité</h3>
            <p>
              Code propre, performances optimisées et bonnes pratiques sont 
              au cœur de chacun de mes projets.
            </p>
          </div>
          
          <div className="summary-card">
            <h3>🤝 Travail d'équipe</h3>
            <p>
              Expérience en méthodes agiles et collaboration étroite avec 
              designers, chefs de projet et autres développeurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;