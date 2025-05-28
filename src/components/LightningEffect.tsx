import React, { useEffect } from 'react';

const LightningEffect = () => {
  useEffect(() => {
    const generarRayo = () => {
      const svg = document.getElementById("svgContainer");
      if (!svg) return;
      
      const ancho = window.innerWidth;
      const altura = window.innerHeight * 0.7;
      const xInicio = Math.random() * ancho;
      let yActual = 0;
      let zigzag = `M${xInicio},${yActual}`;
      let grosor = Math.random() * 3 + 1;
      let color = 'white';
      
      for (let i = 0; i < Math.random() * 3 + 5; i++) {
        let xOffset = (Math.random() - 0.5) * 100;
        let yOffset = Math.random() * 100 + 50;
        yActual += yOffset;
        if (yActual > altura) break;
        zigzag += ` L${xInicio + xOffset},${yActual}`;
        
        if (Math.random() > 0.7) {
          let branchX = xInicio + xOffset + (Math.random() - 0.5) * 50;
          let branchY = yActual + Math.random() * 30;
          if (branchY <= altura) {
            zigzag += ` M${xInicio + xOffset},${yActual} L${branchX},${branchY}`;
          }
        }
      }
      
      const linea = document.createElementNS("http://www.w3.org/2000/svg", "path");
      linea.setAttribute("d", zigzag);
      linea.setAttribute("class", "rayo");
      linea.setAttribute("stroke", color);
      linea.setAttribute("stroke-width", grosor.toString());
      svg.appendChild(linea);
      
      // Apply flash effect to the hero section
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.style.animation = 'flash 0.5s';
        setTimeout(() => {
          heroSection.style.animation = '';
        }, 500);
      }
      
      setTimeout(() => {
        linea.remove();
      }, 700);
    };
    
    const interval = setInterval(generarRayo, Math.random() * 1000 + 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <svg
      id="svgContainer"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default LightningEffect; 