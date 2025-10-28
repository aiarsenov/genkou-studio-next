'use client';

import { motion } from 'framer-motion';

export default function Estimate() {
  return (
    <section id="estimate" className="py-20 md:py-32 bg-[#0F1A26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">Условия работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#07131C] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-[#D7FB72]">Сроки</h3>
              <p className="text-gray-300">от 3х недель</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#07131C] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-[#D7FB72]">Формат</h3>
              <p className="text-gray-300">3D, 2D, моушн</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#07131C] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-[#D7FB72]">Обсуждение</h3>
              <p className="text-gray-300">Бесплатная консультация</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

