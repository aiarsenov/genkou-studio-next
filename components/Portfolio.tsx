'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { 
    id: 1, 
    img: '/images/cover1.jpg', 
    vertical: true, 
    title: 'Проект 1', 
    area: 'a',
    x: 0,
    y: 0,
  },
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    vertical: false, 
    title: 'Проект 2', 
    area: 'b',
    x: 0,
    y: 0,
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    vertical: false, 
    title: 'Проект 3', 
    area: 'c',
    x: 0,
    y: -20,
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    vertical: true, 
    title: 'Проект 4', 
    area: 'd',
    x: 0,
    y: 15,
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    vertical: false, 
    title: 'Проект 5', 
    area: 'e',
    x: 0,
    y: 0,
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    vertical: true, 
    title: 'Проект 6', 
    area: 'f',
    x: 0,
    y: 25,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-8 bg-[#f7f8fb] overflow-hidden">
      {/* SVG Змейка */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-50"
        style={{ zIndex: -1 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,150 Q200,50 400,150 T800,150 T1200,150"
          stroke="#66D3FF"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '0 150', strokeDashoffset: 0 }}
          animate={{
            strokeDashoffset: [0, 150, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-[#1B1B1B] text-center">
            Портфолио
          </h2>
        </motion.div>

        <div 
          className="hidden sm:grid gap-8 max-w-7xl mx-auto"
          style={{
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gridTemplateRows: 'auto auto auto auto',
            gridTemplateAreas: `
              "a a a b b b b b b b b b"
              "a a a c c c c c c c c c"
              "d d d d e e e e e e f f"
              "d d d d e e e e e e f f"
            `,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                gridArea: project.area,
                transform: `translate(${project.x}px, ${project.y}px)`,
              }}
            >
              <motion.div
                className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
                  project.vertical ? 'aspect-[3/4]' : 'aspect-[16/9]'
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-1 sm:hidden gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
                  project.vertical ? 'aspect-[3/4]' : 'aspect-[16/9]'
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Загрузить ещё" */}
        <div className="flex flex-col items-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="load-more px-6 py-3 text-[#1B1B1B] bg-white rounded-full hover:text-[#66D3FF] transition-colors font-medium"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>Загрузить ещё</span>
            <img 
              src="/72114412-38dc-419f-8dae-bc4d0fab8bef.png" 
              alt="Gecko icon" 
              className="gecko-icon"
              style={{
                width: '22px',
                height: 'auto',
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
