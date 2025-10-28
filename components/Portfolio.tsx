'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { 
    id: 1, 
    img: '/images/cover1.jpg', 
    title: 'Проект 1',
    colSpan: 3,
    rowSpan: 2,
  },
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    title: 'Проект 2',
    colSpan: 3,
    rowSpan: 2,
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    title: 'Проект 3',
    colSpan: 4,
    rowSpan: 3,
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    title: 'Проект 4',
    colSpan: 2,
    rowSpan: 1,
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    title: 'Проект 5',
    colSpan: 3,
    rowSpan: 2,
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    title: 'Проект 6',
    colSpan: 3,
    rowSpan: 1,
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Gecko before Portfolio */}
      <section className="relative py-[120px] bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/images/geko glad.png"
            alt="Happy gecko mascot"
            width={160}
            height={160}
            className="w-40 h-auto"
          />
        </motion.div>
      </section>

      <section id="portfolio" className="relative py-[120px] px-8 bg-[#F8F9FB] overflow-hidden">
        {/* SVG Змейка - диагональ из левого верхнего в правый нижний */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0, opacity: 0.3 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1400,900"
            stroke="#66D3FF"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
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
            className="hidden sm:grid max-w-7xl mx-auto portfolio-grid"
            style={{
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridAutoRows: '220px',
              gap: '28px',
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
                  gridColumn: `span ${project.colSpan}`,
                  gridRow: `span ${project.rowSpan}`,
                }}
                className="portfolio-item"
              >
                <motion.div
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group w-full h-full"
                  style={{
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 z-20"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
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
                className="portfolio-item"
              >
                <motion.div
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group aspect-[16/9]"
                  style={{
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 z-20"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
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
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <span>Загрузить ещё</span>
              <Image 
                src="/72114412-38dc-419f-8dae-bc4d0fab8bef.png" 
                alt="Gecko icon" 
                className="gecko-icon"
                width={22}
                height={22}
                style={{
                  width: '22px',
                  height: 'auto',
                }}
              />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
