import React from 'react';
import { Instagram, Twitter, Github, Mail } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { scrollToSection } from '@/utils/scrollUtils';

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com/deepak_07vj',
    label: 'Instagram'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/deepak_07vj',
    label: 'Twitter'
  },
  {
    icon: Github,
    href: 'https://github.com/Thirumoorthy07',
    label: 'GitHub'
  },
  {
    icon: Mail,
    href: 'mailto:thirumoorthy07dj@gmail.com',
    label: 'Email'
  }
];

// Define Quick Links
const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Key Milestones', href: '#key-milestones' },
  { label: 'Skills and Power', href: '#skills' },
  { label: 'Working Style', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

// Define Services
const services = [
  'Web Development',
  'AI Chatbots',
  'UI/UX Design',
  'E-Commerce',
  'Social Media Marketing & Managements',
  'Hyper realistic Pencil Artworks',
];

const Footer = () => {
  const { theme } = useTheme();
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className={`py-12 ${theme === 'light' 
      ? 'bg-white shadow-lg border-t border-neon-red/20' 
      : 'glass-card border-t border-neon-red/20'} 
      transition-all duration-300 ${theme === 'dark' ? 'hover:bg-transparent hover:border-neon-red/20 hover:text-inherit hover:shadow-none' : ''}`}
    >
      <div className="container mx-auto px-4">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Name and Title */}
          <div>
            <h3 className={`font-display text-2xl ${theme === 'light' 
              ? 'text-neon-red font-bold' 
              : 'text-white neon-red-glow'}`}
            >
              Thirumoorthy Murugadoss
            </h3>
            <p className={`${theme === 'light' 
              ? 'text-black' 
              : 'text-white/60'} text-lg mt-2 font-sans`}
            >
              Founder @ Scalevel
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className={`font-display text-xl font-semibold mb-4 ${theme === 'light' ? 'text-neon-red' : 'text-white'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href.substring(1))}
                    className={`${theme === 'light' 
                      ? 'text-black hover:text-neon-red' 
                      : 'text-white/60 hover:text-neon-red'} text-lg transition-colors duration-300 font-sans hover:underline hover:underline-offset-4`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className={`font-display text-xl font-semibold mb-4 ${theme === 'light' ? 'text-neon-red' : 'text-white'}`}>Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className={`${theme === 'light' 
                  ? 'text-black hover:text-neon-red' 
                  : 'text-white/60 hover:text-neon-red'} text-lg font-sans transition-colors duration-300 hover:translate-x-1`}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h4 className={`font-display text-xl font-semibold mb-4 ${theme === 'light' ? 'text-neon-red' : 'text-white'}`}>Stay Updated</h4>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white/60'} text-sm mb-4 font-sans`}>
              Get notified about new projects and tech insights.
            </p>
            <form action="https://formsubmit.co/thirumoorthy07dj@gmail.com" method="POST" className="flex flex-col sm:flex-row gap-2">
              {/* Honeypot */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Success Page (replace with your desired success page URL) */}
              <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
              
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required
                className={`flex-1 px-4 py-2 rounded-lg border ${theme === 'light' 
                  ? 'border-neon-red/50 bg-white/80 text-black hover:border-neon-red' 
                  : 'border-neon-red/50 bg-black/20 text-white hover:border-neon-red'} focus:border-neon-red focus:outline-none text-xl transition-colors duration-300`}
              />
              <button type="submit" className="px-4 py-2 bg-neon-red text-white rounded-lg text-sm font-semibold hover:bg-neon-red/90 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        {/* Bottom Section: Copyright and Crafting */}
        <div className="mt-8 border-t border-neon-red/10 pt-6 text-center">
          <p className={`${theme === 'light' 
            ? 'text-black' 
            : 'text-white/50'} text-lg transition-colors duration-300 font-sans`}
          >
            © {new Date().getFullYear()} Thirumoorthy M • All rights reserved
          </p>
           <p className={`${theme === 'light' ? 'text-black' : 'text-white/50'} text-lg mt-1 transition-colors duration-300 font-sans`}>
            Crafted with ❤️ and lots of ☕ by Thiru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
