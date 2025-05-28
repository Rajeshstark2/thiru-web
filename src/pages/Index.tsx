import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Modified reveal animations to start with higher opacity
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // First make sections visible immediately
    document.querySelectorAll('section > div.container').forEach(section => {
      // Start with low opacity but not completely invisible
      section.classList.add('opacity-50');
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${theme} min-h-screen overflow-x-hidden text-foreground relative`}>
      {/* Star Background Animation */}
      <div className="bg-animation absolute inset-0 -z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>

      <HeroSection />
      <Header />
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
