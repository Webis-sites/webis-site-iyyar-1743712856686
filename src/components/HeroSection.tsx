'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?q=80&w=2070")',
        direction: 'rtl' 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-60">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-secondary"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ]
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <FaCamera className="mx-auto text-6xl text-secondary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-iyyar mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          סטודיו לצילום מוביל בישראל
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-2xl text-xl md:text-2xl"
        >
          חווית לקוח מושלמת בכל ביקור
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 15px rgba(150, 206, 180, 0.7)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          onClick={onCtaClick}
          className="font-iyyar rounded-full bg-secondary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-secondary-dark focus:outline-none focus:ring-4 focus:ring-secondary/50 md:text-xl"
        >
          קבע תור עכשיו
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="h-14 w-8 rounded-full border-2 border-white p-1">
            <motion.div 
              className="h-3 w-3 rounded-full bg-white"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;