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

      <div className="w-full max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] xl:grid-cols-[50%_50%] gap-12 xl:gap-[72px] items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[620px] xl:max-w-[680px] 2xl:max-w-[740px] aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(12,23,42,0.25)]"
            style={{
              animation: 'fadeIn 0.8s ease-in-out',
            }}
          >
            <Image
              src="/images/hero-main.jpg"
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
                className="font-heading font-black uppercase tracking-[0.18em] leading-[1] text-[#101820] text-[clamp(48px,6vw,96px)]"
              >
                AI PRODUCTION
              </h1>
              <h2
                className="font-heading font-semibold uppercase tracking-[0.18em] text-[#101820] text-[clamp(22px,2.6vw,36px)]"
              >
                СОЗДАЁМ КОНТЕНТ БУДУЩЕГО
              </h2>
              <p
                className="font-sans text-[#101820]/80 text-[clamp(16px,1.4vw,20px)] leading-[1.6] max-w-[640px] xl:max-w-[700px] 2xl:max-w-[760px] mx-auto lg:mx-0"
              >
                Полный цикл AI-продакшна — от идеи и сценария до готового видео с моушн-дизайном и монтажом. Мы создаём визуальные истории, которые работают на ваш бренд и задачи.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[720px]">
              <div className="rounded-[28px] bg-[#0A1423] text-white px-8 py-10 flex flex-col gap-4 text-left shadow-[0_25px_60px_rgba(10,20,35,0.25)]">
                <h3 className="font-heading uppercase tracking-[0.15em] text-sm text-[#7EC8FF]">Новый подход к созданию видео</h3>
                <p className="text-[15px] leading-[1.7] text-white/85">
                  Полный цикл AI-продакшна — от идеи и сценария до готового видео с моушн-дизайном и монтажом. Привлекаем внимание, усиливаем коммуникацию, ускоряем производство.
                </p>
              </div>
              <div className="rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(12,23,42,0.15)] h-full">
                <Image
                  src="/images/hero-card.png"
                  alt="Деталь лапы геккона"
                  width={480}
                  height={360}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
