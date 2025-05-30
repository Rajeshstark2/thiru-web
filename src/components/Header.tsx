import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div>
          <h1 className="font-display text-xl md:text-2xl font-bold text-foreground neon-red-glow">Thiru Doss⚡</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {[    
              { text: 'Home', id: 'home' },
              { text: 'About', id: 'about' },
              { text: 'Milestones', id: 'key-milestones' },
              { text: 'Skills', id: 'skills' },
              { text: 'Working Style', id: 'process' },
              { text: 'Projects', id: 'projects' },
              { text: 'Contact', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleSectionClick(item.id)} 
                  className="font-sans text-foreground hover:text-neon-red transition-colors duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <div className="flex items-center">
          {/* <ThemeToggle /> */}
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-3 text-foreground hover:text-neon-red"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card-red absolute top-full left-0 right-0 animate-fade-in z-50">
          <ul className="flex flex-col py-4">
            {[    
              { text: 'Home', id: 'home' },
              { text: 'About', id: 'about' },
              { text: 'Key Milestones', id: 'key-milestones' },
              { text: 'Skills and Power', id: 'skills' },
              { text: 'Working Style', id: 'process' },
              { text: 'Projects', id: 'projects' },
              { text: 'Contact', id: 'contact' }
            ].map((item) => (
              <li key={item.id} className="border-b border-neon-red/20 last:border-b-0">
                <button 
                  onClick={() => handleSectionClick(item.id)} 
                  className="font-sans text-foreground hover:text-neon-red transition-colors duration-300 uppercase text-sm tracking-wider py-4 px-6 w-full text-left dark:text-white font-medium"
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
