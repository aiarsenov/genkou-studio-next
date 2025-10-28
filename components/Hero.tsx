'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from './NavBar';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <Image
              src="/images/2025-10-28 14.34.44.jpg"
              alt="Gecko"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.02em] mb-6 text-[#0C0C0C]">
                AI PRODUCTION
              </h1>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-[#0C0C0C]">
                СОЗДАЁМ КОНТЕНТ БУДУЩЕГО
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
