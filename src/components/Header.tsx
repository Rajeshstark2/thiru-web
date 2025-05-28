import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div>
          <h1 className="font-display text-xl md:text-2xl font-bold text-foreground neon-red-glow">T.</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="font-sans text-foreground hover:text-neon-red transition-colors duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  {item}
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
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item} className="border-b border-neon-red/20 last:border-b-0">
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="font-sans text-foreground hover:text-neon-red transition-colors duration-300 uppercase text-sm tracking-wider py-4 px-6 w-full text-left dark:text-white font-medium"
                >
                  {item}
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
