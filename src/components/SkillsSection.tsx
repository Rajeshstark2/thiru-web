import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTheme } from './ThemeProvider';
import FadeInSection from './FadeInSection';

const skillCategories = {
  software: [
    { name: 'Web Development', proficiency: 90, details: 'React, JS, HTML/CSS, APIs' },
    { name: 'Game Development', proficiency: 75, details: 'Unity, Game Design, C#' },
  ],
  sports: [
    { name: 'Basketball Player', proficiency: 90, details: 'Professional Level' },
    { name: 'Athlete', proficiency: 90, details: 'Track & Field' },
  ],
  coCurricular: [
    { name: 'Public Speaking', proficiency: 85, details: 'Presentations, Tutorials' },
    { name: 'Content Creation', proficiency: 85, details: 'Technical Writing, Guides' },
    { name: 'Artist', proficiency: 90, details: '12 years of experience in graphite pencil art' },
  ],
  business: [
    { name: 'Sales & Communication', proficiency: 80, details: 'Client Relations, Negotiations' },
    { name: 'Objection Handling', proficiency: 85, details: 'Problem Resolution, Client Success' },
    { name: 'Business Strategy', proficiency: 80, details: 'Digital Marketing, Growth' },
  ],
};

const SkillsSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="skills" className="pt-5 pb-20 px-4 relative">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-black/10"></div>
        
      <FadeInSection>
        <div className="max-w-5xl mx-auto relative z-10 px-4">
          <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
            Skills & Power
          </h2>
          
          <Tabs defaultValue="software" className="w-full">
            <TabsList className="w-full flex justify-center space-x-2 bg-transparent mb-8 whitespace-nowrap">
              <TabsTrigger 
                value="software"
                className="data-[state=active]:bg-neon-red data-[state=active]:text-white px-3 py-1.5 text-sm hover:bg-neon-red/80 hover:text-white shadow-sm font-medium"
              >
                Software
              </TabsTrigger>
              <TabsTrigger 
                value="sports"
                className="data-[state=active]:bg-neon-red data-[state=active]:text-white px-3 py-1.5 text-sm hover:bg-neon-red/80 hover:text-white shadow-sm font-medium"
              >
                Sports
              </TabsTrigger>
              <TabsTrigger 
                value="coCurricular"
                className="data-[state=active]:bg-neon-red data-[state=active]:text-white px-3 py-1.5 text-sm hover:bg-neon-red/80 hover:text-white shadow-sm font-medium"
              >
                Co-Curricular
              </TabsTrigger>
              <TabsTrigger 
                value="business"
                className="data-[state=active]:bg-neon-red data-[state=active]:text-white px-3 py-1.5 text-sm hover:bg-neon-red/80 hover:text-white shadow-sm font-medium"
              >
                Business
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 gap-8">
                  {skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className={`p-5 rounded-xl shadow-md transition-all duration-300 group cursor-pointer
                        ${theme === 'light' 
                          ? 'bg-white/90 backdrop-blur-md border-2 border-neon-red/50 hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.8)] hover:translate-y-[-5px]' 
                          : 'bg-black/80 backdrop-blur-md border-2 border-neon-red/50 hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px]'
                        }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-display text-lg text-foreground group-hover:text-white transition-colors duration-300 flex items-center font-semibold">
                          <CheckCircle size={18} className="mr-2 text-neon-red group-hover:text-white transition-colors duration-300" />
                          {skill.name}
                        </h3>
                        <span className="text-foreground group-hover:text-white transition-colors duration-300 font-sans text-sm font-bold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      <div className={`h-2 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} rounded-full mb-2 overflow-hidden`}>
                        <div 
                          className="h-full bg-neon-red rounded-full skill-progress-bar"
                          style={{ 
                            width: `${skill.proficiency}%`,
                            animation: `progressAnimation 1.5s ease-out forwards`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                      
                      <p className="text-foreground/80 group-hover:text-white/90 transition-colors duration-300 text-sm font-sans font-medium">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default SkillsSection;
