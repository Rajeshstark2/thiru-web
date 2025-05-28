import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import FadeInSection from './FadeInSection';

const webProjects = [
  {
    title: 'QR Genie',
    description: 'QR code generator with customization options',
    image: '/lovable-uploads/qrgeniepro.jpg',
    demoLink: 'https://qr-genie-pro.netlify.app/',
    category: 'web'
  },
  {
    title: 'AI Fitness Pro',
    description: 'AI-powered workout assistant for personalized training',
    image: '/lovable-uploads/aifitnesspro.jpg',
    demoLink: 'https://ai-fitness-pro.netlify.app/',
    category: 'web'
  },
  {
    title: 'HireSkill Pro',
    description: 'Portfolio & skill hiring platform for professionals',
    image: '/lovable-uploads/hireskillpro.jpg',
    demoLink: 'https://hireskillpro.netlify.app/',
    category: 'web'
  },
  {
    title: 'Data Insight Pro',
    description: 'Interactive graph & data insight dashboard',
    image: '/lovable-uploads/datainsightpro.jpg',
    demoLink: 'https://datainsight-pro.netlify.app/',
    category: 'web'
  },
  {
    title: 'Last Minute Preparation',
    description: 'Student-focused exam preparation app with study tools',
    image: 'lovable-uploads/lastminutepreperation.jpg',
    demoLink: 'https://examprep-1.onrender.com/',
    category: 'web'
  }
];

const gameProjects = [
  {
    title: 'Skate Boarder',
    description: '2D fun arcade-style game with challenging obstacles',
    image: '/lovable-uploads/skateboarder.jpg',
    demoLink: '#',
    category: 'game'
  },
  {
    title: 'Delivery Man',
    description: 'Obstacle delivery game with time challenges',
    image: '/lovable-uploads/a-vibrant-2d-logo-design-for-the-game-de_ltrGTYdzTeyS2OLwBMe1HA_wk2IPPuBQ3-DY3TjNn1lWw.jpeg',
    demoLink: '#',
    category: 'game'
  }
];

const allProjects = [...webProjects, ...gameProjects];

const ProjectsSection = () => {
  const [category, setCategory] = React.useState('all');
  
  const filteredProjects = category === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === category);

  return (
    <section id="projects" className="pt-5 pb-20 px-4 relative">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-black/10"></div>
      
      <FadeInSection>
        <div className="max-w-5xl mx-auto relative z-10 px-4">
          <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground neon-red-glow text-center mb-6">
            Projects <span className="animate-pulse-glow">⚡</span>
          </h2>
          
          <div className="flex justify-center mb-12 space-x-4">
            <button 
              onClick={() => setCategory('all')}
              className={`px-4 py-2 font-montserrat rounded-lg transition-all duration-300 ${
                category === 'all' 
                  ? 'bg-neon-red text-white neon-red-glow' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-neon-red'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setCategory('web')}
              className={`px-4 py-2 font-montserrat rounded-lg transition-all duration-300 ${
                category === 'web' 
                  ? 'bg-neon-red text-white neon-red-glow' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-neon-red'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setCategory('game')}
              className={`px-4 py-2 font-montserrat rounded-lg transition-all duration-300 ${
                category === 'game' 
                  ? 'bg-neon-red text-white neon-red-glow' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-neon-red'
              }`}
            >
              Games
            </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card-red rounded-xl overflow-hidden card-hover-effect group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-black/80 light:from-black/60 to-transparent group-hover:from-neon-red/80"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-orbitron text-xl text-foreground neon-red-glow mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 dark:text-white/70 light:text-black/80 text-sm mb-4 group-hover:text-white">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-foreground/50 font-montserrat group-hover:text-white">
                      {project.category === 'web' ? 'Web Project' : 'Game'}
                    </span>
                    
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ripple-button flex items-center font-orbitron text-white text-sm bg-black/50 dark:bg-black/50 light:bg-black/70 px-3 py-2 rounded hover:bg-neon-red transition-all duration-300"
                    >
                      {project.category === 'web' ? (
                        <>
                          <ExternalLink size={14} className="mr-2" />
                          Live Demo
                        </>
                      ) : (
                        <>
                          <Github size={14} className="mr-2" />
                          Download
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectsSection;
