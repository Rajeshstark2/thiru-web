import React, { useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  // Add other props if needed, e.g., delay, threshold
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            // Optionally unobserve after animation is triggered
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      // Ensure element is initially hidden before observing
      sectionRef.current.classList.add('opacity-0');
       (sectionRef.current as HTMLElement).style.opacity = '0'; // Reinforce initial hidden state
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div ref={sectionRef} className="w-full">
      {children}
    </div>
  );
};

export default FadeInSection; 