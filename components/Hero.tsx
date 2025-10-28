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
      
      <div className="w-full max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[48px] items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            }}
          >
            <Image
              src="/images/gecko.jpg"
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
            className="flex flex-col justify-center gap-[48px] text-center lg:text-left"
          >
            {/* Headings */}
            <div className="flex flex-col gap-4">
              <h1 
                className="font-heading font-bold uppercase tracking-[0.02em] leading-[1.1] text-[#1B1B1B]"
                style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                }}
              >
                AI PRODUCTION
              </h1>
              <h2 
                className="font-sans font-medium uppercase tracking-[0.02em] text-[#1B1B1B] mt-4"
                style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                }}
              >
                СОЗДАЁМ КОНТЕНТ БУДУЩЕГО
              </h2>
              <p 
                className="font-sans font-normal text-[#6E7580] mt-8 max-w-[520px]"
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 18px)',
                  lineHeight: '1.6',
                }}
              >
                Полный цикл AI-продакшна — от идеи и сценария до готового видео с моушн-дизайном и монтажом.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex-1 rounded-2xl p-6 bg-white text-[#1B1B1B] border border-[#E5E5E5] transition-all"
              >
                <h3 className="font-heading font-bold text-xl mb-2">3D Моушн</h3>
                <p className="text-[#6E7580] text-sm">
                  Создание 3D анимации и визуализации для рекламы и презентаций
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex-1 rounded-2xl p-6 bg-white text-[#1B1B1B] border border-[#E5E5E5] transition-all"
              >
                <h3 className="font-heading font-bold text-xl mb-2">AI Видео</h3>
                <p className="text-[#6E7580] text-sm">
                  Генерация контента с использованием искусственного интеллекта
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
