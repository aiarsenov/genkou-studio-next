'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, img: '/images/cover1.jpg', aspect: 'aspect-[3/4]' },
  { id: 2, img: '/images/cover2.jpg', aspect: 'aspect-[16/9]' },
  { id: 3, img: '/images/cover3.jpg', aspect: 'aspect-[3/4]' },
  { id: 4, img: '/images/cover4.png', aspect: 'aspect-[16/9]' },
  { id: 5, img: '/images/cover5.jpg', aspect: 'aspect-[4/5]' },
  { id: 6, img: '/images/cover6.png', aspect: 'aspect-[16/9]' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-[#0C0C0C] text-center">
            Портфолио
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance] space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.aspect} overflow-hidden rounded-2xl shadow-md relative group cursor-pointer mb-6 break-inside-avoid`}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.img}
                  alt={`Проект ${project.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-lg font-heading font-semibold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Проект {project.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
