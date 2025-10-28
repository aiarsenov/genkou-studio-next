'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const approachCards = [
  {
    id: 1,
    content: (
      <>
        <p className="text-white leading-relaxed mb-4">
          Стоимость формируется исходя из сложности идеи, её реализации и сроков.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Если чуть подробнее — на цену влияет наличие готовых референсов и материалов, длительность ролика, количество сцен и кадров, требуемый уровень реализма, а также объём генераций и доработок в пост-продакшне.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Точную стоимость можем озвучить после короткого брифа. Особенно важно сразу обозначить сроки, цель проекта и общее настроение, которое вы хотите передать.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Будет здорово, если добавите визуальные референсы или примеры — это помогает точнее подобрать стиль и инструменты генерации.
        </p>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <p className="text-white leading-relaxed mb-4">
          Созвон поможет быстрее согласовать идею, но и по письменному брифу мы сможем оценить задачу, определить подходящие нейросети и назвать ориентировочную стоимость.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Создание AI-видео в нашей студии не займёт у нас много времени и сил.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Мы берём на себя всё — от идеи до финальной работы.
        </p>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <p className="text-white leading-relaxed mb-4">
          На старте проводим короткий бриф, согласуем визуальный стиль и сюжет.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Далее на каждом этапе генерации и монтажа запрашиваем обратную связь, чтобы результат точно совпал с вашим видением.
        </p>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <p className="text-white leading-relaxed mb-4">
          3 правки — бесплатно.
        </p>
        <p className="text-gray-300 leading-relaxed">
          При внесении более трёх правок цена зависит от сложности проекта.
        </p>
      </>
    ),
  },
];

export default function Approach() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="clients" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approachCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-[#0C0C0C] text-white p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
                hoveredCard === card.id
                  ? 'border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.4),0_0_12px_rgba(255,255,255,0.1)]'
                  : 'border-transparent shadow-[0_4px_15px_rgba(0,0,0,0.1)]'
              }`}
            >
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
