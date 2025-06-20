export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    github: string;
    featured?: boolean;
  }
  
  export interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
    category:
    'frontend' | 'backend' | 'design' | 'tools' |
    'database' | 'devops' | 'testing' | 'security' | 'other'; 
  }
  
  export interface ContactForm {
    name: string;
    email: string;
    message: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
  }