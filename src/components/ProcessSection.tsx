import React, { useEffect, useRef } from 'react';
import { Clock, MessageSquare, FileText, Video, Calendar, Settings, CheckCircle, Zap, Users } from 'lucide-react';
import FadeInSection from './FadeInSection';

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your requirements and goals"
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating detailed project roadmap and timeline"
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with regular updates"
    },
    {
      number: "04",
      title: "Delivery",
      description: "Testing, deployment, and ongoing support"
    }
  ];

  const bookingInfo = [
    {
      icon: Clock,
      title: "Session Duration",
      description: "30-60 minutes based on service"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Video call via Google Meet/Zoom"
    },
    {
      icon: FileText,
      title: "Preparation",
      description: "Please prepare your questions and requirements"
    }
  ];

  return (
    <section id="process" className="pt-5 pb-20 px-4 relative">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-black/10"></div>
      
      {/* Wrap content with FadeInSection */}
      <FadeInSection>
        <div className="max-w-5xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-4 neon-red-glow">
            My Working Process
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="glass-card-about p-6 rounded-xl group hover:bg-neon-red/95 hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="text-4xl font-display font-bold text-neon-red group-hover:text-white transition-colors duration-300 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-semibold text-neon-red group-hover:text-white transition-colors duration-300 mb-2">
                {step.title}
              </h3>
              <p className="text-foreground dark:text-white light:text-gray-800 font-sans group-hover:text-white transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-neon-red mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-foreground dark:text-white light:text-gray-800 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="glass-card-red px-8 py-3 rounded-lg text-white font-semibold hover:bg-neon-red transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a 
              href="#projects" 
              className="glass-card px-8 py-3 rounded-lg text-foreground dark:text-white light:text-gray-800 font-semibold hover:bg-neon-red hover:text-white transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ProcessSection; 