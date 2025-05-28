import React, { useEffect, useRef } from 'react';
import { User, MapPin, Briefcase, Building, Languages, Calendar, Trophy, Users, Rocket, Code, BookOpen, Palette } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import FadeInSection from './FadeInSection';

const AboutSection = () => {
  // Updated with your actual images
  const profileImages = [
    "/lovable-uploads/c11f44f7-4ae2-4bae-bd8d-186d2d5f3955.png",
    "/lovable-uploads/7413fd21-6612-442c-bf82-af782d557067.png",
    "/lovable-uploads/b83b490f-19ad-4dbb-ae6e-913fc15f9899.png",
    "/lovable-uploads/4ffa7d46-20ee-4d60-a362-b3c38492d290.png",
    "/lovable-uploads/543223c6-8766-49aa-9525-fb33173c2619.png"
  ];

  const quickFacts = [
    { icon: User, label: "Name", value: "Thirumoorthy Murugadoss" },
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Briefcase, label: "Role", value: "AI Developer, Artist & Founder" },
    { icon: Building, label: "Company", value: "Founder (ScaleVel) & CEO (StarkCloudie and CosmoTec)" },
    { icon: Languages, label: "Languages", value: "English, Tamil" },
    { icon: Calendar, label: "Experience", value: "5+ Years" }
  ];

  const milestones = [
    {
      year: "2020",
      icon: Palette,
      title: "Freelancing Journey as a Graphic Artist",
      description: "I officially began freelancing by offering my hyper-realistic graphite pencil artwork as a professional service. With over 12 years of experience, I create lifelike portraits and detailed custom illustrations that capture emotion and essence. This marks a major step in turning passion into profession—earning through art while connecting with people through timeless, hand-drawn pieces."
    },
    {
      year: "2021",
      icon: BookOpen,
      title: "Started Self Improvement Path",
      description: "I started diving into self-improvement books across productivity, habit-building, communication, finance, and mindset. This journey is about more than learning—it's about transformation, applying insights from top thinkers to grow personally and professionally."
    },
    {
      year: "2022",
      icon: Code,
      title: "Technical Mastery",
      description: "I've been learning Python to sharpen my programming and problem-solving skills. Alongside, I explored 2D game development with C#, completing projects like Delivery Man and Skateboarder, gaining hands-on experience with game physics, player mechanics, and creative implementation."
    },
    {
      year: "2023 - 2024",
      icon: Rocket,
      title: "Founded Scalevel",
      description: "I founded Scalevel, a digital solutions agency focused on growing brands online. We offer website development, social media marketing, and content strategies to improve digital presence, streamline operations, and drive engagement."
    },
    {
      year: "2025",
      icon: Users,
      title: "Team Building & Knowledge Sharing",
      description: "We've organized community meetups to share insights, connect with like-minded individuals, and grow as a team. These sessions have been key to building a dedicated team aligned by a common vision and passion for growth."
    }
  ];

  // Use useRef to track milestone elements for animation
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    // Observe each milestone element
    milestoneRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      milestoneRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [milestones]); // Re-observe if milestones data changes

  return (
    <section id="about" className="pt-5 pb-20 px-4 relative">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-black/10"></div>
      
      <FadeInSection>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 neon-red-glow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Profile Images Carousel - Centered */}
          <div className="w-full max-w-4xl mx-auto mb-16">
            <Carousel 
              className="w-full"
              opts={{
                loop: true,
                align: "center"
              }}
              plugins={[
                Autoplay({ delay: 3000, stopOnInteraction: false }) as any,
              ]}
            >
              <CarouselContent>
                {profileImages.map((image, index) => {
                  const imageTexts = [
                    "Thiru",
                    "Skill xploration Meet 2025",
                    "Skill xploration Meet 2025",
                    "Winnings in BasketBall and Athletic events",
                    "BasketBall Winners of Annual sports day 2025"
                  ];
                  
                  return (
                    <CarouselItem key={index} className="flex justify-center">
                      <div className="glass-card-about p-4 rounded-xl w-full">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <img
                            src={image}
                            alt={`Profile ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
                          />
                          <div className="absolute top-4 left-4 bg-black/60 px-4 py-2 rounded-lg">
                            <span className="text-white font-display text-lg font-semibold">
                              {imageTexts[index]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="glass-card hover:bg-neon-red hover:text-white" />
              <CarouselNext className="glass-card hover:bg-neon-red hover:text-white" />
            </Carousel>
          </div>

          {/* Content Section - Below Photos */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Facts Section */}
            <div className="lg:col-span-3">
              <div className="glass-card-about p-6 rounded-xl group hover:bg-neon-red/95 hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.8)] hover:translate-y-[-5px] transition-all duration-300">
                <h3 className="text-2xl font-display font-semibold text-neon-red group-hover:text-white transition-colors duration-300 mb-6">Quick Facts</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {quickFacts.map((fact, index) => {
                    const IconComponent = fact.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-black/20 dark:bg-black/20 light:bg-white/20 group-hover:bg-white/10 transition-colors duration-300">
                        <IconComponent size={20} className="text-neon-red flex-shrink-0 mt-0.5 group-hover:text-white transition-colors duration-300" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-muted-foreground block font-medium group-hover:text-white/90 transition-colors duration-300">{fact.label}:</span>
                          <span className="font-medium text-foreground text-sm leading-tight break-words group-hover:text-white transition-colors duration-300">{fact.value}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:col-span-3">
              <div className="glass-card-about p-8 rounded-xl group hover:bg-neon-red/95 hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px] transition-all duration-300">
                <h3 className="text-xl font-display font-semibold text-neon-red group-hover:text-white transition-colors duration-300 mb-4">My Story</h3>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground dark:text-white light:text-gray-800 font-sans group-hover:text-white transition-colors duration-300">
                    I'm a passionate developer who loves creating innovative solutions that bridge technology and creativity. 
                    With a keen eye for detail and a drive for excellence, I transform ideas into powerful digital experiences. 
                    My journey in tech has been fueled by curiosity and a constant desire to push boundaries.
                  </p>
                  
                  <p className="text-base leading-relaxed text-foreground dark:text-white light:text-gray-800 font-sans group-hover:text-white transition-colors duration-300">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in the power of collaboration and 
                    continuous learning to create meaningful impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Milestones Section - Timeline */}
            <div className="lg:col-span-3">
                <div className="rounded-xl">
                  <h3 className="text-xl font-display font-semibold text-neon-red mb-10 text-center">Key Milestones</h3>
                
                {/* Timeline Container */}
                  <div className="relative py-12">
                  {/* Central Vertical Line */}
                  <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-neon-red/30 dark:bg-neon-red/50"></div>

                  {milestones.map((milestone, index) => {
                      const isEven = index % 2 === 0;
                    return (
                      <div 
                        key={index} 
                          ref={el => { milestoneRefs.current[index] = el; }}
                          className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] w-full opacity-0 mb-10 md:mb-20 items-center"
                          style={{ opacity: 0, animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Year Display */}
                        <div className={`flex items-center z-10 mb-4 md:mb-0 ${isEven ? 'md:col-start-2 md:col-end-3 md:flex-col' : 'md:col-start-2 md:col-end-3 md:flex-col'}`}>
                              <div className="w-3 h-3 rounded-full bg-neon-red dark:bg-neon-red/80 md:w-5 md:h-5 flex-shrink-0 mr-3 md:mr-0 md:flex items-center justify-center hidden md:flex"></div>
                              <span className="text-xl font-display font-bold text-white block md:text-2xl md:mt-1 text-left md:text-center">{milestone.year}</span>
                         </div>

                          {/* Content Card */}
                          <div className={`w-full ${isEven ? 'md:col-start-1 md:col-end-2 md:text-right' : 'md:col-start-3 md:col-end-4 md:text-left'}`}>
                             <div className="glass-card-about p-4 rounded-lg border border-neon-red w-full">
                                 <h4 className="font-semibold text-foreground dark:text-white light:text-gray-800 mb-1 font-sans text-lg">
                               {milestone.title}
                            </h4>
                              <p className="text-base text-muted-foreground dark:text-gray-300 light:text-gray-600 font-sans">
                              {milestone.description}
                            </p>
                           </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default AboutSection;
