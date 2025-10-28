'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    title: 'Cover 2',
    gridColumn: '1 / span 6',
    gridRow: '1 / span 3',
    transform: 'translateY(-20px)',
  },
  { 
    id: 1, 
    img: '/images/cover1.jpg', 
    title: 'Cover 1',
    gridColumn: '7 / span 6',
    gridRow: '2 / span 3',
    transform: 'translateY(40px)',
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    title: 'Cover 3',
    gridColumn: '3 / span 8',
    gridRow: '4 / span 3',
    transform: '',
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    title: 'Cover 4',
    gridColumn: '11 / span 2',
    gridRow: '4 / span 2',
    transform: '',
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    title: 'Cover 5',
    gridColumn: '1 / span 7',
    gridRow: '6 / span 3',
    transform: '',
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    title: 'Cover 6',
    gridColumn: '8 / span 5',
    gridRow: '5 / span 3',
    transform: 'translateY(-20px)',
  },
];

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="relative px-8 bg-[#F8FAFD] overflow-hidden portfolio-section"
      style={{
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
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

        <div className="max-w-7xl mx-auto relative z-10 w-full" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-[#1B1B1B] text-center">
              Портфолио
            </h2>
          </motion.div>

          <div 
            className="portfolio-grid-desktop"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridAutoRows: '220px',
              gap: '28px',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1',
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
                  gridColumn: project.gridColumn,
                  gridRow: project.gridRow,
                  transform: project.transform || 'none',
                  animation: `fadeUp 0.6s ease-out ${index * 0.12}s both`,
                }}
                className="portfolio-item"
              >
                <motion.div
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group w-full h-full portfolio-card"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
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
                      className="w-6 h-6 text-black play-icon"
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

          {/* Tablet grid (2 columns) */}
          <div 
            className="portfolio-grid-tablet"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '28px',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="portfolio-item"
              >
                <motion.div
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group aspect-[16/9] portfolio-card"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
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
                      className="w-6 h-6 text-black play-icon"
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

          {/* Mobile grid (1 column) */}
          <div 
            className="portfolio-grid-mobile"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '28px',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="portfolio-item"
              >
                <motion.div
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group aspect-[16/9] portfolio-card"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
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
                      className="w-6 h-6 text-black play-icon"
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
          <div className="flex flex-col items-center mt-12">
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
                src="/images/gekon 2.png" 
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
