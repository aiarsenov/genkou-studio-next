'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Approach() {
  return (
    <section id="clients" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Dark with text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0C0C0C] text-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 uppercase tracking-[0.02em]">
              Новый подход
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Мы создаем контент будущего, используя передовые технологии искусственного интеллекта 
              и креативное видение. Каждый проект — это уникальное сочетание инноваций и эстетики.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              От концепции до финальной реализации — мы сопровождаем вас на каждом этапе, 
              гарантируя высокое качество и соответствие вашим задачам.
            </p>
          </motion.div>

          {/* Right Card: Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/2025-10-28 14.34.38.jpg"
              alt="Blue gecko paw"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

