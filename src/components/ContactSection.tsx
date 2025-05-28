import React from 'react';
import { Mail, Send } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import FadeInSection from './FadeInSection';
import { Clock, MessageSquare, FileText } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const ContactSection = () => {
  const { theme } = useTheme();

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
    <section id="contact" className="pt-5 pb-20 px-4 relative">
      <FadeInSection>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground dark:neon-red-glow">
              Get In Touch
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className={`p-6 md:px-20 md:py-6 rounded-xl transition-all duration-300 group cursor-pointer
              ${theme === 'light' 
                ? 'bg-white/90 backdrop-blur-md border-2 border-neon-red/50 shadow-lg hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.8)] hover:translate-y-[-5px]' 
                : 'bg-black/80 backdrop-blur-md border-2 border-neon-red/50 hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px]'
              }`}>
              <h3 className="font-orbitron text-xl text-foreground group-hover:text-white transition-colors duration-300 mb-6 flex items-center">
                <Mail size={20} className="mr-2 text-neon-red group-hover:text-white transition-colors duration-300" />
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-foreground/80 group-hover:text-white/90 transition-colors duration-300">
                  Feel free to reach out to me directly at:
                </p>
                <p className="text-neon-red group-hover:text-white transition-colors duration-300 font-montserrat font-semibold">
                  thirumoorthy07dj@gmail.com
                </p>
              </div>
              
              <p className="text-foreground/70 group-hover:text-white/80 transition-colors duration-300 text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className={`p-6 md:px-20 md:py-6 rounded-xl transition-all duration-300 group cursor-pointer
              ${theme === 'light' 
                ? 'bg-white/90 backdrop-blur-md border-2 border-neon-red/50 shadow-lg hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.8)] hover:translate-y-[-5px]' 
                : 'bg-black/80 backdrop-blur-md border-2 border-neon-red/50 hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px]'
              }`}>
              <h3 className="font-orbitron text-xl text-foreground group-hover:text-white transition-colors duration-300 mb-6 flex items-center">
                <Send size={20} className="mr-2 text-neon-red group-hover:text-white transition-colors duration-300" />
                Send Message
              </h3>

              <form 
                action="https://formsubmit.co/thirumoorthy07dj@gmail.com" 
                method="POST"
                className="space-y-4"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Success Page */}
                <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80 group-hover:text-white/90 transition-colors duration-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={`w-full px-4 py-2 rounded-lg bg-black/20 dark:bg-black/20 light:bg-white/20 border-2 border-neon-red/50 focus:border-neon-red focus:outline-none transition-colors duration-300 ${
                      theme === 'light' ? 'text-gray-800 group-hover:text-white' : 'text-white group-hover:text-white'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80 group-hover:text-white/90 transition-colors duration-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={`w-full px-4 py-2 rounded-lg bg-black/20 dark:bg-black/20 light:bg-white/20 border-2 border-neon-red/50 focus:border-neon-red focus:outline-none transition-colors duration-300 ${
                      theme === 'light' ? 'text-gray-800 group-hover:text-white' : 'text-white group-hover:text-white'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80 group-hover:text-white/90 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg bg-black/20 dark:bg-black/20 light:bg-white/20 border-2 border-neon-red/50 focus:border-neon-red focus:outline-none transition-colors duration-300 ${
                      theme === 'light' ? 'text-gray-800 group-hover:text-white' : 'text-white group-hover:text-white'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-neon-red text-white px-6 py-3 rounded-lg font-medium hover:bg-neon-red/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className={`p-6 md:px-20 md:py-6 rounded-xl transition-all duration-300 group cursor-pointer
              ${theme === 'light' 
                ? 'bg-white/90 backdrop-blur-md border-2 border-neon-red/50 shadow-lg hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.8)] hover:translate-y-[-5px]' 
                : 'bg-black/80 backdrop-blur-md border-2 border-neon-red/50 hover:bg-neon-red hover:border-neon-red hover:shadow-[0_0_25px_rgba(224,17,95,0.9)] hover:translate-y-[-5px]'
              }`}>
              <h3 className="font-orbitron text-xl text-foreground group-hover:text-white transition-colors duration-300 mb-6 flex items-center">
                <Mail size={20} className="mr-2 text-neon-red group-hover:text-white transition-colors duration-300" />
                Booking Information
              </h3>

              <div className="space-y-4">
                {bookingInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-black/20 dark:bg-black/20 light:bg-white/20 group-hover:bg-white/10 transition-colors duration-300">
                      <Icon size={20} className="text-neon-red flex-shrink-0 mt-0.5 group-hover:text-white transition-colors duration-300" />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-muted-foreground block font-medium group-hover:text-white/90 transition-colors duration-300">{info.title}:</span>
                        <span className="font-medium text-foreground text-sm leading-tight break-words group-hover:text-white transition-colors duration-300">{info.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Follow Me Section - Added */}
      <FadeInSection>
        <div className="max-w-7xl mx-auto relative z-10 mt-16 px-4 text-center py-8">
           <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground dark:neon-red-glow mb-10">
            Follow Me
          </h3>
          <div className="flex justify-center space-x-8 md:space-x-12">
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/Thirumoorthy07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 dark:bg-black/30 light:bg-white/30 hover:bg-neon-red transition-all duration-300 group text-white/80 hover:text-white transform hover:scale-125 shadow-lg hover:shadow-neon-red-glow cursor-pointer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github animate-flicker group-hover:animate-pulse-glow"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3S18.73.65 17 2.41a6.47 6.47 0 0 0-6 0C9.27.65 8.09 3 8.09 3A5.07 5.07 0 0 0 8 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6 17.13V21"></path></svg>
            </a>

            {/* Instagram Link Button */}
             <a 
              href="https://instagram.com/deepak_07vj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 dark:bg-black/30 light:bg-white/30 hover:bg-neon-red transition-all duration-300 group text-white/80 hover:text-white transform hover:scale-125 shadow-lg hover:shadow-neon-red-glow cursor-pointer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram animate-flicker group-hover:animate-pulse-glow"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>

            {/* Twitter Link Button */}
             <a 
              href="https://twitter.com/deepak_07vj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 dark:bg-black/30 light:bg-white/30 hover:bg-neon-red transition-all duration-300 group text-white/80 hover:text-white transform hover:scale-125 shadow-lg hover:shadow-neon-red-glow cursor-pointer"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter animate-flicker group-hover:animate-pulse-glow"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.5-.7 3.1-1.5 4-2.4z"></path></svg>
            </a>

            {/* Email Link Button */}
             <a 
              href="mailto:thirumoorthy07dj@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 dark:bg-black/30 light:bg-white/30 hover:bg-neon-red transition-all duration-300 group text-white/80 hover:text-white transform hover:scale-125 shadow-lg hover:shadow-neon-red-glow cursor-pointer"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail animate-flicker group-hover:animate-pulse-glow"><rect width="20" height="16" x="2" y="2" rx="5" ry="5"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>

            {/* LinkedIn Link Button - Added */}
             <a 
              href="https://www.linkedin.com/in/thirumoorthy-murugadoss-8902862a5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 dark:bg-black/30 light:bg-white/30 hover:bg-neon-red transition-all duration-300 group text-white/80 hover:text-white transform hover:scale-125 shadow-lg hover:shadow-neon-red-glow cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin size={36} className="lucide lucide-linkedin animate-flicker group-hover:animate-pulse-glow" />
            </a>

           </div>
         </div>
       </FadeInSection>
    </section>
  );
};

export default ContactSection;
