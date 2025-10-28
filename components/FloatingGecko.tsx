'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingGecko() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40 pointer-events-none select-none"
    >
      <motion.img
        src="/images/gekon 2.png"
        alt="Floating gecko mascot"
        className="w-24 h-auto cursor-pointer pointer-events-auto"
        whileHover={{ scaleX: -1, scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

