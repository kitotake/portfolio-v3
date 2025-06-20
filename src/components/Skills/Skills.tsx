import React, { useState, useEffect } from 'react';
import { Skill } from '../../types';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<ExtendedSkill | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'level'>('level');

  // Interface étendue pour les données supplémentaires
  interface ExtendedSkill extends Skill {
    description?: string;
  }

 
const skills: ExtendedSkill[] = [
  // Frontend
  { name: 'React', level: 1, icon: '⚛️', category: 'frontend', description: 'Bibliothèque JavaScript pour créer des interfaces utilisateur interactives',  },
  { name: 'TypeScript', level: 0, icon: '🔷', category: 'frontend', description: 'Superset de JavaScript avec typage statique',  },
  { name: 'Next.js', level: 1, icon: '▲', category: 'frontend', description: 'Framework React avec rendu côté serveur et génération statique',  },
  { name: 'Vue.js', level: 1, icon: '💚', category: 'frontend', description: 'Framework JavaScript progressif pour construire des UI',  },
  { name: 'SCSS', level: 5, icon: '🎨', category: 'frontend', description: 'Préprocesseur CSS avec variables et fonctions',  },
  { name: 'Tailwind', level: 0, icon: '🌊', category: 'frontend', description: 'Framework CSS utilitaire pour un développement rapide',  },
  { name: 'HTML5', level: 75, icon: '🌐', category: 'frontend', description: 'Langage de balisage pour structurer le contenu web',   },
  { name: 'CSS3', level: 85, icon: '🎭', category: 'frontend', description: 'Feuilles de styles pour la présentation web',   },
  { name: 'JavaScript', level: 10, icon: '⚡', category: 'frontend', description: 'Langage de programmation pour le web interactif',   },
  
  // Backend
  { name: 'Node.js', level: 15, icon: '🟢', category: 'backend', description: 'Environnement d\'exécution JavaScript côté serveur',  },
  { name: 'Python', level: 2, icon: '🐍', category: 'backend', description: 'Langage de programmation polyvalent et puissant',  },
  { name: 'Express.js', level: 0, icon: '🚂', category: 'backend', description: 'Framework web minimaliste pour Node.js',  },
  { name: 'FastAPI', level: 0, icon: '⚡', category: 'backend', description: 'Framework web moderne et rapide pour Python',  },
  { name: 'GraphQL', level: 0, icon: '📊', category: 'backend', description: 'Langage de requête pour APIs',  },
  { name: 'REST API', level: 0, icon: '🔌', category: 'backend', description: 'Architecture pour services web',  },
  
  // Database
  { name: 'MariaDB', level: 5, icon: '🐬', category: 'database', description: 'Base de données relationnelle performante',   },
  { name: 'MongoDB', level: 0, icon: '🍃', category: 'database', description: 'Base de données NoSQL orientée documents',  },
  { name: 'PostgreSQL', level: 2, icon: '🐘', category: 'database', description: 'Base de données relationnelle avancée',  },
  { name: 'Redis', level: 0, icon: '🔴', category: 'database', description: 'Base de données en mémoire pour le cache',  },
  
  // Design
  { name: 'Figma', level: 75, icon: '🎯', category: 'design', description: 'Outil de design collaboratif pour interfaces',   },
  { name: 'Canva', level: 45, icon: '✨', category: 'design', description: 'Plateforme de création graphique simple',  },
  { name: 'GIMP', level: 25, icon: '🖼️', category: 'design', description: 'Éditeur d\'images libre et gratuit',   },
  { name: 'Adobe XD', level: 15, icon: '🎨', category: 'design', description: 'Outil de conception UX/UI',  },
      
  // Tools
  { name: 'Git', level: 35, icon: '📝', category: 'tools', description: 'Système de contrôle de version distribué', },
  { name: 'VS Code', level: 45, icon: '💻', category: 'tools', description: 'Éditeur de code puissant et extensible',  },
  { name: 'Webpack', level: 0, icon: '📦', category: 'tools', description: 'Bundler de modules pour applications web',  },
  { name: 'Vite', level: 5, icon: '⚡', category: 'tools', description: 'Outil de build rapide pour le développement',  },
  { name: 'ESLint', level: 0, icon: '📏', category: 'tools', description: 'Linter pour identifier les problèmes de code',  },
  { name: 'Prettier', level: 3, icon: '✨', category: 'tools', description: 'Formateur de code automatique',  },

  // DevOps
  { name: 'Docker', level: 0, icon: '🐳', category: 'devops', description: 'Plateforme de conteneurisation d\'applications', },
  { name: 'AWS', level: 0, icon: '☁️', category: 'devops', description: 'Services cloud Amazon Web Services',  },
  { name: 'Nginx', level: 0, icon: '🌐', category: 'devops', description: 'Serveur web et proxy inverse performant',  },
  { name: 'CI/CD', level: 0, icon: '🔄', category: 'devops', description: 'Intégration et déploiement continus',  },

  // Testing
  { name: 'Jest', level: 0, icon: '🃏', category: 'testing', description: 'Framework de test JavaScript',  },
  { name: 'Cypress', level: 0, icon: '🌲', category: 'testing', description: 'Outil de test end-to-end',  },
  { name: 'Testing Library', level: 0, icon: '🧪', category: 'testing', description: 'Utilitaires pour tester les composants',  },
  { name: 'Postman', level: 0, icon: '📮', category: 'testing', description: 'Plateforme pour tester les APIs',  },

  
  { name: 'FiveM', level: 50, icon: '🎮', category: 'other',
    description: 'Développement complet de serveurs FiveM avec gestion du backend, UI web et bonnes pratiques de sécurité.',},

  // Security
  { name: 'JWT', level: 0, icon: '🔐', category: 'security', description: 'Tokens sécurisés pour l\'authentification',  },
  { name: 'OAuth', level: 0, icon: '🛡️', category: 'security', description: 'Protocole d\'autorisation sécurisé',  },
  { name: 'HTTPS/SSL', level: 1, icon: '🔒', category: 'security', description: 'Protocoles de sécurisation des communications',  },
  { name: 'OWASP', level: 0, icon: '⚠️', category: 'security', description: 'Bonnes pratiques de sécurité web',  },


];

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🖥️' },
    { id: 'backend', name: 'Backend', icon: '🧩' },
    { id: 'database', name: 'Base de données', icon: '🗄️' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'tools', name: 'Outils', icon: '🛠️' },
    { id: 'devops', name: 'DevOps', icon: '🚀' },
    { id: 'testing', name: 'Tests', icon: '🧪' },
    { id: 'security', name: 'Sécurité', icon: '🔒' },
    { id: 'other', name: 'Autres', icon: '📦' },
  ];

  // Filtrage et tri des compétences
  const getFilteredAndSortedSkills = () => {
    let filtered = skills.filter(skill => 
      skill.category === activeCategory &&
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Tri par niveau ou nom
    filtered.sort((a, b) => {
      if (sortBy === 'level') {
        return b.level - a.level;
      }
      return a.name.localeCompare(b.name);
    });

    // Limiter l'affichage si showAll est false
    if (!showAll && filtered.length > 6) {
      filtered = filtered.slice(0, 6);
    }

    return filtered;
  };

  const filteredSkills = getFilteredAndSortedSkills();

  // Statistiques
  const getStats = () => {
    const categorySkills = skills.filter(skill => skill.category === activeCategory);
    const avgLevel = Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length);
    const expertSkills = categorySkills.filter(skill => skill.level >= 80).length;
    const advancedSkills = categorySkills.filter(skill => skill.level >= 70 && skill.level < 80).length;

    return { avgLevel, expertSkills, advancedSkills, totalSkills: categorySkills.length };
  };

  const stats = getStats();

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
  }, [activeCategory, searchTerm, showAll]);

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

        {/* Barre de recherche et filtres */}
        <div className="skills-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher une compétence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="skill-search"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="sort-controls">
            <label>Trier par:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as 'name' | 'level')}
              className="sort-select"
            >
              <option value="level">Niveau</option>
              <option value="name">Nom</option>
            </select>
          </div>
        </div>

        <div className="skills-categories">
          {categories.map((category) => {
            const categorySkillsCount = skills.filter(s => s.category === category.id).length;
            return (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-count">({categorySkillsCount})</span>
              </button>
            );
          })}
        </div>

        {/* Statistiques de la catégorie */}
        <div className="category-stats">
          <div className="stat-item">
            <span className="stat-icon">📊</span>
            <span className="stat-label">Niveau moyen:</span>
            <span className="stat-value">{stats.avgLevel}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-label">Compétences expertes:</span>
            <span className="stat-value">{stats.expertSkills}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🚀</span>
            <span className="stat-label">Compétences avancées:</span>
            <span className="stat-value">{stats.advancedSkills}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">📈</span>
            <span className="stat-label">Total:</span>
            <span className="stat-value">{stats.totalSkills}</span>
          </div>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${activeCategory}`}
              className={`skill-item ${skill.level >= 80 ? 'expert' : skill.level >= 70 ? 'advanced' : 'intermediate'}`}
              data-skill={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedSkill(skill)}
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

              <div className="skill-badges">
                {skill.level >= 80 && <span className="badge expert-badge">Expert</span>}
                {skill.level >= 70 && skill.level < 80 && <span className="badge advanced-badge">Avancé</span>}
                {skill.level >= 50 && skill.level < 70 && <span className="badge intermediate-badge">Intermédiaire</span>}
                {skill.level < 50 && <span className="badge beginner-badge">Débutant</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir plus/moins */}
        {skills.filter(skill => 
          skill.category === activeCategory &&
          skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).length > 6 && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? '👆 Voir moins' : '👇 Voir plus'}
            </button>
          </div>
        )}

        {/* Modal de détail de compétence */}
        {selectedSkill && (
          <div className="skill-modal-overlay" onClick={() => setSelectedSkill(null)}>
            <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedSkill(null)}>✕</button>
              <div className="modal-header">
                <span className="modal-icon">{selectedSkill.icon}</span>
                <h3>{selectedSkill.name}</h3>
                <span className="modal-level">{selectedSkill.level}%</span>
              </div>
              <div className="modal-content">
                <p className="skill-description">{selectedSkill.description}</p>
                <div className="skill-level-bar">
                  <div className="level-progress" style={{ width: `${selectedSkill.level}%` }}></div>
                </div>
                <div className="skill-level-text">
                  {selectedSkill.level >= 80 && <span className="level-expert">Niveau Expert</span>}
                  {selectedSkill.level >= 70 && selectedSkill.level < 80 && <span className="level-advanced">Niveau Avancé</span>}
                  {selectedSkill.level >= 50 && selectedSkill.level < 70 && <span className="level-intermediate">Niveau Intermédiaire</span>}
                  {selectedSkill.level < 50 && <span className="level-beginner">Niveau Débutant</span>}
                </div>
              </div>
            </div>
          </div>
        )}

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

          <div className="summary-card">
            <h3>📈 Veille technologique</h3>
            <p>
              Participation active aux communautés tech, lecture de blogs spécialisés 
              et expérimentation avec les dernières tendances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;