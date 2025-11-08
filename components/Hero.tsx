'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from './NavBar';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-visible"
      style={{
        background: 'linear-gradient(90deg, #F8F9FB 0%, #FFFFFF 100%)',
        height: 'auto',
      }}
    >
      <NavBar />
      
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-[64px] items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Image */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[620px] aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg lg:ml-auto"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              animation: 'fadeIn 0.8s ease-in-out',
            }}
          >
            <Image
              src="/images/2025-10-28 18.00.28.jpg"
              alt="3D Gecko mascot"
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
            className="flex flex-col justify-center gap-12 text-center lg:text-left lg:pl-4"
          >
            {/* Headings */}
            <div className="flex flex-col gap-4">
              <h1 
                className="ai-production font-heading font-bold uppercase tracking-[0.02em] leading-[1.05]"
                style={{
                  fontSize: 'clamp(64px, 8vw, 108px)',
                }}
              >
                AI PRODUCTION
              </h1>
              <h2 
                className="font-sans font-semibold uppercase tracking-[0.08em] text-[#1B1B1B] mt-6"
                style={{
                  fontSize: 'clamp(24px, 3.5vw, 40px)',
                  letterSpacing: '0.12em',
                }}
              >
                СОЗДАЁМ КОНТЕНТ БУДУЩЕГО
              </h2>
              <p 
                className="font-sans font-normal text-[#444] mt-10 max-w-[640px] mx-auto lg:mx-0"
                style={{
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  lineHeight: '1.6',
                }}
              >
                Полный цикл AI-продакшна — от идеи и сценария до готового видео с моушн-дизайном и монтажом.
              </p>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
