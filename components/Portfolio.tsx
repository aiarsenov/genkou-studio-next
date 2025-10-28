'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, img: '/images/cover1.jpg', vertical: true, title: 'Проект 1' },
  { id: 2, img: '/images/cover2.jpg', vertical: false, title: 'Проект 2' },
  { id: 3, img: '/images/cover3.jpg', vertical: false, title: 'Проект 3' },
  { id: 4, img: '/images/cover4.png', vertical: false, title: 'Проект 4' },
  { id: 5, img: '/images/cover5.jpg', vertical: false, title: 'Проект 5' },
  { id: 6, img: '/images/cover6.png', vertical: true, title: 'Проект 6' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#f7f8fb]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.02em] text-[#0C0C0C] text-center">
            Портфолио
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div
                className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl bg-white group cursor-pointer ${
                  project.vertical ? 'aspect-[3/4]' : 'aspect-[16/9]'
                }`}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-center text-[#0C0C0C] font-heading">
                {project.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Загрузить ещё + геккон */}
        <div className="flex flex-col items-center mt-16 space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-[#0C0C0C] bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-all font-medium"
          >
            Загрузить ещё ↓
          </motion.button>
          <Image
            src="/images/gekon 2.png"
            alt="Gecko icon"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      </div>
    </section>
  );
}
