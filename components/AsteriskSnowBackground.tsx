
import React, { useMemo, useEffect, useState } from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;

const AsteriskShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <rect x="41" y="10" width="18" height="80" rx="4" />
    <rect x="41" y="10" width="18" height="80" rx="4" transform="rotate(60 50 50)" />
    <rect x="41" y="10" width="18" height="80" rx="4" transform="rotate(120 50 50)" />
  </svg>
);

export const AsteriskSnowBackground: React.FC = () => {
  const [particleCount, setParticleCount] = useState(100);

  useEffect(() => {
    const updateCount = () => {
      // Use 25 particles for mobile devices to improve performance, 100 for desktop
      setParticleCount(window.innerWidth < 768 ? 25 : 100);
    };

    // Initial check
    updateCount();

    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  // Generate particles based on particleCount
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const size = Math.random() * 8 + 4; // Tiny: 4px to 12px
      const drift = (Math.random() - 0.5) * 60; // Random horizontal drift distance
      
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size,
        duration: Math.random() * 15 + 15, // Falling speed
        delay: Math.random() * -40, 
        opacity: Math.random() * 0.15 + 0.05, // Opacity
        rotation: Math.random() * 360,
        blur: size < 6 ? '1px' : '0px', 
        driftX: drift,
        zIndex: Math.random() > 0.5 ? 1 : 6
      };
    });
  }, [particleCount]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              y: "-10%", 
              x: p.left, 
              rotate: p.rotation, 
              opacity: 0,
              filter: `blur(${p.blur})`
            }}
            animate={{ 
              y: "110%",
              // Drift left and right as it falls
              x: [p.left, `calc(${p.left} + ${p.driftX}px)`, p.left],
              rotate: p.rotation + 720,
              opacity: [0, p.opacity, p.opacity, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
              x: {
                  duration: p.duration / 2,
                  repeat: Infinity,
                  ease: "easeInOut"
              },
              times: [0, 0.1, 0.9, 1]
            }}
            className="absolute text-[#ff751f] will-change-transform"
            style={{ 
                width: p.size, 
                height: p.size,
                zIndex: p.zIndex 
            }}
          >
            <AsteriskShape className="w-full h-full" />
          </motion.div>
        ))}
      </div>
    </>
  );
};
