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

// Define Artwork Projects
const artworkProjects = [
  {
    title: 'For Client',
    image: '/lovable-uploads/duo.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'For Client',
    image: '/lovable-uploads/rohithsakka.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'Passionate work',
    image: '/lovable-uploads/vijay2.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'For Client',
    image: '/lovable-uploads/mega.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'Passionate work',
    image: '/lovable-uploads/kamal.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'Passionate work',
    image: '/lovable-uploads/shiva.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'For Client',
    image: '/lovable-uploads/pradhik.jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'Passionate work',
    image: '/lovable-uploads/vijay (3).jpg', // Replace with actual image path
    demoLink: '#', // No live demo for art, maybe a gallery link later?
    category: 'artwork'
  },
  {
    title: 'For Client',
    image: '/lovable-uploads/inba.jpg', // Replace with actual image path
    demoLink: '#',
    category: 'artwork'
  }
];

const allProjects = [...webProjects, ...gameProjects, ...artworkProjects];

const ProjectsSection = () => {
  const [category, setCategory] = React.useState('web');
  
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
            <button 
              onClick={() => setCategory('artwork')}
              className={`px-4 py-2 font-montserrat rounded-lg transition-all duration-300 ${
                category === 'artwork' 
                  ? 'bg-neon-red text-white neon-red-glow' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-neon-red'
              }`}
            >
              Artworks
            </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card-red rounded-xl overflow-hidden card-hover-effect group"
              >
                <div className={`overflow-hidden relative ${project.category === 'artwork' ? 'h-[30rem]' : 'h-48'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.category === 'artwork' ? 'object-contain' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-black/80 light:from-black/60 to-transparent group-hover:from-neon-red/80"></div>
                </div>
                
                <div className={`px-6 ${project.category === 'artwork' ? 'pt-2 pb-2' : 'py-6'}`}>
                  <h3 className="font-orbitron text-xl text-foreground neon-red-glow mb-2">
                    {project.title}
                  </h3>
                  
                  <p className={`text-foreground/70 dark:text-white/70 light:text-black/80 text-sm group-hover:text-white ${project.category === 'artwork' ? 'mb-0' : 'mb-4'}`}>
                    {project.description ? project.description : ''}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`font-montserrat group-hover:text-white ${project.category === 'artwork' ? 'text-sm' : 'text-xs text-foreground/50'}`}>
                      {project.category === 'web' ? 'Web Project' : project.category === 'game' ? 'Game' : 'Artwork'}
                    </span>
                    
                    {project.category !== 'artwork' && (
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Artwork Contact Button - Only shown when artwork category is selected */}
          {category === 'artwork' && (
            <div className="mt-12 text-center">
              <a 
                href="#contact" 
                className="inline-block glass-card-red px-8 py-4 rounded-lg text-white font-orbitron text-lg hover:bg-neon-red transition-all duration-300"
              >
                Get Your Artwork Done
              </a>
            </div>
          )}
        </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectsSection;
