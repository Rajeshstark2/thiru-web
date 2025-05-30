import React, { useEffect, useRef, useState } from 'react';
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
    "/lovable-uploads/543223c6-8766-49aa-9525-fb33173c2619.png",
    "/lovable-uploads/ifetmeet.jpg"
  ];

  const quickFacts = [
    { icon: User, label: "Name", value: "Thirumoorthy Murugadoss" },
    { icon: MapPin, label: "Location", value: "Blue Marble" },
    { icon: Briefcase, label: "Role", value: "AI Developer, Artist & Founder" },
    { icon: Building, label: "Company", value: "Founder (ScaleVel) & CEO (StarkCloudie and CosmoTec)" },
    { icon: Languages, label: "Languages", value: "English, Tamil" },
    { icon: Calendar, label: "Experience", value: "5+ Years" }
  ];

  const milestones = [
    {
      year: "2020",
      icon: Palette,
      title: "Started offering hyper-realistic graphite portraits professionally, turning 12+ years of passion into paid art.",
    },
    {
      year: "2021",
      icon: BookOpen,
      title: "Began deep exploration of self-help books on habits, mindset, productivity, finance, and communication.",
    },
    {
      year: "2022",
      icon: Code,
      title: "Learned Python and built 2D games like Delivery Man and Skateboarder using C# and game development principles.",
    },
    {
      year: "2023 - 2024",
      icon: Rocket,
      title: "Established Scalevel, a digital agency delivering websites, social media marketing, and content strategies.",
    },
    {
      year: "2025",
      icon: Users,
      title: "Team & Community: Led knowledge-sharing meetups to connect with creators and build a growth-driven, purpose-aligned team.",
    }
  ];

  // Use useRef to track milestone elements for animation
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lastMilestoneHeight, setLastMilestoneHeight] = useState('0px');

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
                    "Thirumoorthy Murugadoss⚡",
                    "Skill xploration Meet 2025",
                    "Skill xploration Meet 2025",
                    "Winnings in BasketBall and Athletic events",
                    "BasketBall Winners of Annual sports day 2025",
                    "Gen Next Vision 2025 - IFET project fest"
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
                        </div>
                        {/* Text Description Below Image */}
                        <div className="mt-4 text-center">
                          <span className="text-white font-display text-lg font-semibold">
                            {imageTexts[index]}
                          </span>
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
                    In 6th grade, my brother said software engineering was cool and planned to pursue it. That comment sparked my interest, and I began exploring tech on my own
                    through videos and small projects. Over time, my curiosity grew into a passion. By 11th grade, I chose Computer Science as my stream. That decision marked a 
                    key step in turning inspiration into action. Scroll down to see where it led me.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Milestones Section - Timeline */}
            <div id="key-milestones" className="lg:col-span-3">
                <div className="rounded-xl">
                  <h3 className="text-4xl font-display font-semibold text-white mb-10 text-center">Key Milestones</h3>
                
                {/* Timeline Container */}
                  <div className="relative py-12">
                  {/* Central Vertical Line */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-neon-red/30 dark:bg-neon-red/50"
                    style={{ height: lastMilestoneHeight }}
                  ></div>

                  {milestones.map((milestone, index) => {
                      const isEven = index % 2 === 0;
                    return (
                      <div 
                        key={index} 
                          ref={el => { 
                            milestoneRefs.current[index] = el;
                            if (index === milestones.length - 1 && el) {
                              // Calculate the height needed for the vertical line up to the bottom of the last milestone
                              const containerTop = el.parentElement?.getBoundingClientRect().top || 0;
                              const lastMilestoneBottom = el.getBoundingClientRect().bottom;
                              const newHeight = lastMilestoneBottom - containerTop;
                              setLastMilestoneHeight(`${newHeight}px`);
                            }
                          }}
                          className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] w-full opacity-0 mb-10 md:mb-20 items-center"
                          style={{ opacity: 0, animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Year Display */}
                        <div className={`flex items-center z-10 mb-4 md:mb-0 ${isEven ? 'md:col-start-2 md:col-end-3 md:flex-col' : 'md:col-start-2 md:col-end-3 md:flex-col'}`}>
                              <div className="w-3 h-3 rounded-full bg-neon-red dark:bg-neon-red/80 md:w-5 md:h-5 flex-shrink-0 mr-3 md:mr-0 md:flex items-center justify-center hidden md:flex"></div>
                              <span className="text-xl font-display font-bold text-white block md:text-2xl md:mt-1 text-left md:text-center">{milestone.year}</span>
                         </div>

                          {/* Content Card */}
                          <div className={`w-full md:col-span-1 ${isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-3 md:text-left'}`}>
                            <div className="glass-card-about p-4 rounded-xl group hover:bg-neon-red/95 hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px] transition-all duration-300">
                              <p className="text-base leading-relaxed text-foreground dark:text-white light:text-gray-800 font-sans group-hover:text-white transition-colors duration-300">
                                {milestone.title}
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
