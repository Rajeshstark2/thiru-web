import React from 'react';
import { Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import LightningEffect from './LightningEffect';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center relative px-4 overflow-hidden z-20">
      {/* Background overlay with adjusted opacity for light mode */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-white z-0"></div>
      
      {/* Lightning Effect - Moved before the content wrapper */}
      <LightningEffect />
      
      {/* Wrapper for content to control z-index - Increased z-index to z-40 */}
      <div className="relative z-40 w-full">
        <div className="container mx-auto text-center max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 tracking-wide">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl block mb-2 text-neon-red drop-shadow-[0_0_10px_rgba(224,17,95,0.5)] font-medium">Hi, myself</span>
            <span className="text-neon-red drop-shadow-[0_0_10px_rgba(224,17,95,0.5)] inline-block">
              {isMobile ? (
                // Scaled up version for mobile
                <span className="text-4xl tracking-wide">THIRUMOORTHY</span>
              ) : (
                // Regular version for desktop
                <span className="whitespace-nowrap">THIRUMOORTHY</span>
              )}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground dark:text-white light:text-black font-sans mb-6 tracking-wide max-w-2xl mx-auto font-medium drop-shadow-md">
            Crafting Code, Creativity & Chaos.
          </p>
          
          {/* Buttons Container */}
          <div className="flex justify-center gap-4 z-50">
          
            {/* Download CV Button */}
            <a 
              href="/lovable-uploads/thiru cv.png" 
              download
              className="ripple-button bg-white/10 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 font-sans font-medium relative overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg rounded-md flex items-center justify-center z-10"
            >
              Download CV
            </a>

            {/* Book Me Now Button */}
            <a 
              href="#contact"
              className="ripple-button bg-neon-red text-white px-6 sm:px-8 py-3 sm:py-4 font-sans font-medium relative overflow-hidden hover:bg-neon-red/90 transition-all duration-300 hover:scale-105 shadow-lg rounded-md flex items-center justify-center z-10"
            >
              Book Me Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
