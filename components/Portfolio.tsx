'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { 
    id: 1, 
    img: '/images/cover1.jpg', 
    title: 'Проект 1',
    colSpan: 5, // горизонтальная (широкая)
    rowSpan: 2,
  },
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    title: 'Проект 2',
    colSpan: 7, // горизонтальная (рядом)
    rowSpan: 2,
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    title: 'Проект 3',
    colSpan: 3, // вертикальная (высокая)
    rowSpan: 4,
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    title: 'Проект 4',
    colSpan: 2, // маленькая квадратная справа
    rowSpan: 2,
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    title: 'Проект 5',
    colSpan: 5, // горизонтальная
    rowSpan: 2,
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    title: 'Проект 6',
    colSpan: 7, // горизонтальная нижняя
    rowSpan: 2,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-[120px] px-8 bg-[#F8F9FB] overflow-hidden">
        {/* SVG Змейка - диагональ из левого верхнего в правый нижний */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0 }}
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
            style={{ opacity: 0.3 }}
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
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridAutoRows: '200px',
              gap: '28px',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                style={{
                  gridColumn: `span ${project.colSpan}`,
                  gridRow: `span ${project.rowSpan}`,
                  animation: `fadeUp 0.6s ease-out ${index * 0.12}s both`,
                }}
                className="portfolio-item"
              >
                <motion.div
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group w-full h-full portfolio-card"
                  style={{
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[24px]" />
                  <button 
                    className="play-button absolute rounded-full flex items-center justify-center z-20"
                    style={{
                      width: '52px',
                      height: '52px',
                      top: '20px',
                      right: '20px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      transition: 'all 0.3s ease',
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
  );
}
