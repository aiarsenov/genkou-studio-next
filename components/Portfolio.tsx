'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, img: '/images/cover1.jpg', vertical: true, title: 'Проект 1', colSpan: 'col-span-4', rowSpan: 'row-span-2' },
  { id: 2, img: '/images/cover2.jpg', vertical: false, title: 'Проект 2', colSpan: 'col-span-8', rowSpan: '' },
  { id: 3, img: '/images/cover3.jpg', vertical: false, title: 'Проект 3', colSpan: 'col-span-8', rowSpan: '' },
  { id: 4, img: '/images/cover4.png', vertical: false, title: 'Проект 4', colSpan: 'col-span-8', rowSpan: '' },
  { id: 5, img: '/images/cover5.jpg', vertical: false, title: 'Проект 5', colSpan: 'col-span-8', rowSpan: '' },
  { id: 6, img: '/images/cover6.png', vertical: true, title: 'Проект 6', colSpan: 'col-span-4', rowSpan: 'row-span-2' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-8 bg-[#f7f8fb] overflow-hidden">
      {/* SVG Змейка */}
      <svg
        className="absolute -z-10 top-0 left-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200"
          stroke="#C7FF6E"
          strokeWidth="3"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '0 200', strokeDashoffset: 0 }}
          animate={{
            strokeDasharray: ['0 200', '10 20', '0 200'],
            strokeDashoffset: [0, 200, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
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
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-[#0C0C0C] text-center">
            Портфолио
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Проект 1 - вертикальный, слева */}
          <motion.div
            key={projects[0].id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-4 sm:row-span-2"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer group aspect-[3/4]">
              <Image
                src={projects[0].img}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold">
                Подробнее →
              </div>
            </div>
          </motion.div>

          {/* Проект 2 - горизонтальный */}
          <motion.div
            key={projects[1].id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-8"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer group aspect-[16/9]">
              <Image
                src={projects[1].img}
                alt={projects[1].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold">
                Подробнее →
              </div>
            </div>
          </motion.div>

          {/* Проект 3 - горизонтальный */}
          <motion.div
            key={projects[2].id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:col-span-8 sm:col-start-5"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer group aspect-[16/9]">
              <Image
                src={projects[2].img}
                alt={projects[2].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold">
                Подробнее →
              </div>
            </div>
          </motion.div>

          {/* Проект 4 - горизонтальный, под проектом 2 */}
          <motion.div
            key={projects[3].id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="sm:col-span-8"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer group aspect-[16/9]">
              <Image
                src={projects[3].img}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold">
                Подробнее →
              </div>
            </div>
          </motion.div>

          {/* Проект 5 - горизонтальный, под проектом 3 */}
          <motion.div
            key={projects[4].id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sm:col-span-8 sm:col-start-5"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer group aspect-[16/9]">
              <Image
                src={projects[4].img}
                alt={projects[4].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold">
                Подробнее →
              </div>
            </div>
          </motion.div>

          {/* Проект 6 - вертикальный, справа внизу */}
          <motion.div
            key={projects[5].id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="sm:col-span-4 sm:row-span-2 sm:row-start-3"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer group aspect-[3/4]">
              <Image
                src={projects[5].img}
                alt={projects[5].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/90 transition-all z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold">
                Подробнее →
              </div>
            </div>
          </motion.div>
        </div>

        {/* Кнопка "Загрузить ещё" + геккон */}
        <div className="flex flex-col items-center mt-20 space-y-4">
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
            className="w-10 h-10 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
}
