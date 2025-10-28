'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    phone: '',
    contacts: '',
    company: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Using Formspree
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'your-form-id';

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ phone: '', contacts: '', company: '', privacy: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacts" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.02em] mb-4 text-[#0C0C0C]">
            ОСТАВЬТЕ ЗАЯВКУ И МЫ СДЕЛАЕМ ТАКОЙ ЖЕ КЛАССНЫЙ ПРОЕКТ
          </h2>
          <p className="text-gray-600">
            <a href="tel:+79104320087" className="hover:text-[#C62828] transition-colors font-medium">
              +7 910 432 00 87
            </a>{' '}
            <span className="text-[#E5E5E5] mx-2">|</span>{' '}
            <a
              href="mailto:hello@genkoustudio.ru"
              className="hover:text-[#C62828] transition-colors font-medium"
            >
              hello@genkoustudio.ru
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="tel"
              placeholder="Телефон *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-xl text-[#0C0C0C] placeholder-gray-400 focus:outline-none focus:border-[#C62828] transition-colors"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Телефон, email или ссылка на соц. сеть *"
              required
              value={formData.contacts}
              onChange={(e) => setFormData({ ...formData, contacts: e.target.value })}
              className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-xl text-[#0C0C0C] placeholder-gray-400 focus:outline-none focus:border-[#C62828] transition-colors"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Название компании"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-xl text-[#0C0C0C] placeholder-gray-400 focus:outline-none focus:border-[#C62828] transition-colors"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              required
              checked={formData.privacy}
              onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
              className="mt-1 mr-3 w-5 h-5 accent-[#C62828]"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              Я даю согласие на{' '}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C62828] hover:underline"
              >
                обработку персональных данных
              </a>
            </label>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-[#0C0C0C] text-white rounded-xl font-semibold text-lg hover:bg-[#111111] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600"
            >
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[#C62828]"
            >
              Ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
