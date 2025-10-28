'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Case {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  fullDescription?: string;
}

const cases: Case[] = [
  {
    id: 'mts-ai',
    title: 'МТС AI',
    description: '3D видео об IT продукте компании',
    image: 'https://static.tildacdn.com/tild3030-3734-4832-a362-623335656338/Rectangle_1003300.jpg',
    fullDescription:
      'Создание 3D видео для презентации IT продукта компании МТС. Проект включал в себя разработку концепции, создание 3D моделей и анимации, а также пост-продакшн.',
  },
  {
    id: 'omoda-c5',
    title: 'OMODA C5',
    description: '3D моушн видео',
    image: 'https://static.tildacdn.com/tild6239-6561-4262-b933-393430643932/kv_preza.png',
    fullDescription:
      'Создание 3D моушн видео для презентации автомобиля OMODA C5. Проект включал в себя создание 3D модели автомобиля, разработку анимации и визуальных эффектов.',
  },
  {
    id: 'x5-academy',
    title: 'X5 DIGITAL ACADEMY',
    description: '2D explainer в стиле pixel art',
    image: 'https://static.tildacdn.com/tild6334-3234-4535-a666-373063613631/5x.jpg',
    fullDescription:
      'Создание 2D explainer видео в стиле pixel art для X5 DIGITAL ACADEMY. Проект включал в себя разработку концепции, создание анимации в пиксельном стиле и озвучивание.',
  },
  {
    id: 'datatech',
    title: 'DATATECH',
    description: '3D видео для выставочного стенда',
    image: 'https://static.tildacdn.com/tild6361-6563-4261-b062-346562643934/Rectangle_1003301.jpg',
    fullDescription:
      'Создание 3D видео для выставочного стенда компании DATATECH. Проект включал в себя разработку концепции, создание 3D моделей и анимации для демонстрации на выставке.',
  },
];

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [visibleCases, setVisibleCases] = useState(5);
  const showAll = visibleCases >= cases.length;

  return (
    <section id="start" className="py-20 md:py-32 bg-[#07131C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Кейсы 2020 - 2023</h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {cases.slice(0, visibleCases).map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-800 mb-4">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#C62828] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#D7FB72] transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-gray-400">{caseItem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Load More / Hide Button */}
        {cases.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCases(showAll ? 5 : cases.length)}
              className="px-8 py-3 bg-[#D7FB72] text-[#07131C] rounded-full font-semibold hover:bg-[#c5e865] transition-colors"
            >
              {showAll ? 'Скрыть ↑' : 'Загрузить еще'}
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, x: '50%' }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0.9, x: '50%' }}
              className="bg-[#07131C] rounded-lg w-full max-w-2xl h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-bold mb-2">{selectedCase.title}</h2>
                <p className="text-[#D7FB72] mb-4">{selectedCase.description}</p>
                <p className="text-gray-300">{selectedCase.fullDescription}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

