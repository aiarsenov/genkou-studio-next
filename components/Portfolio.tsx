'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Case {
  id: string;
  title: string;
  description: string;
  image: string;
}

const cases: Case[] = [
  {
    id: 'mts-ai',
    title: 'МТС AI',
    description: '3D видео об IT продукте компании',
    image: 'https://static.tildacdn.com/tild3030-3734-4832-a362-623335656338/Rectangle_1003300.jpg',
  },
  {
    id: 'omoda-c5',
    title: 'OMODA C5',
    description: '3D моушн видео',
    image: 'https://static.tildacdn.com/tild6239-6561-4262-b933-393430643932/kv_preza.png',
  },
  {
    id: 'x5-academy',
    title: 'X5 DIGITAL ACADEMY',
    description: '2D explainer в стиле pixel art',
    image: 'https://static.tildacdn.com/tild6334-3234-4535-a666-373063613631/5x.jpg',
  },
];

export default function Portfolio() {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

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
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-[#0C0C0C]">
            Портфолио
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCase(caseItem.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    hoveredCase === caseItem.id ? 'scale-110' : ''
                  }`}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCase === caseItem.id ? 1 : 0 }}
                  className="absolute inset-0 bg-[#0C0C0C]/80 flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: hoveredCase === caseItem.id ? 1 : 0.8,
                      opacity: hoveredCase === caseItem.id ? 1 : 0,
                    }}
                    className="bg-white text-[#0C0C0C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Смотреть кейс
                  </motion.button>
                </motion.div>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-[#0C0C0C] group-hover:text-[#C62828] transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-gray-600">{caseItem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

