'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, img: '/images/cover1.jpg' },
  { id: 2, img: '/images/cover2.jpg' },
  { id: 3, img: '/images/cover3.jpg' },
  { id: 4, img: '/images/cover4.png' },
  { id: 5, img: '/images/cover5.jpg' },
  { id: 6, img: '/images/cover6.png' },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image
                  src={project.img}
                  alt={`Проект ${project.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-lg font-medium text-center text-[#0C0C0C] font-heading">
                Проект {project.id}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
