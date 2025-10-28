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
  const [errors, setErrors] = useState<{
    phone?: string;
    contacts?: string;
    privacy?: string;
  }>({});

  // Маска телефона
  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    
    let formatted = '+7 (';
    if (digits.length > 0) {
      formatted += digits.substring(0, 3);
      if (digits.length >= 4) {
        formatted += ') ' + digits.substring(3, 6);
      }
      if (digits.length >= 7) {
        formatted += '-' + digits.substring(6, 8);
      }
      if (digits.length >= 9) {
        formatted += '-' + digits.substring(8, 10);
      }
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    // Очищаем ошибку при вводе
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  // Валидация email
  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Проверка, является ли contacts email или другим контактом
  const validateContacts = (contacts: string): boolean => {
    // Если это email, проверяем регуляркой
    if (contacts.includes('@')) {
      return validateEmail(contacts);
    }
    // Для других контактов (телефон, ссылка) просто проверяем, что не пустое
    return contacts.trim().length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    const newErrors: typeof errors = {};
    
    // Проверка телефона (должен быть заполнен полностью: +7 (___) ___-__-__ = 18 символов)
    if (formData.phone.length < 18) {
      newErrors.phone = 'Заполни корректно это поле';
    }
    
    // Проверка контактов
    if (!formData.contacts.trim()) {
      newErrors.contacts = 'Заполни корректно это поле';
    } else if (!validateContacts(formData.contacts)) {
      newErrors.contacts = 'Введите корректный email';
    }
    
    // Проверка чекбокса
    if (!formData.privacy) {
      newErrors.privacy = 'Подтверди согласие на обработку данных';
    }
    
    // Если есть ошибки, показываем их и не отправляем форму
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      return;
    }
    
    // Очищаем ошибки перед отправкой
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/hello@genkoustudio.ru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          phone: formData.phone,
          contacts: formData.contacts,
          company: formData.company,
          _subject: 'Новая заявка с сайта GENKOU STUDIO',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ phone: '', contacts: '', company: '', privacy: false });
        setErrors({});
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="relative py-[120px] bg-[#F8F9FB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.02em] mb-4 text-[#1B1B1B]">
            ОСТАВЬТЕ ЗАЯВКУ И МЫ СДЕЛАЕМ ТАКОЙ ЖЕ КЛАССНЫЙ ПРОЕКТ
          </h2>
          <p className="text-[#6E7580]">
            <a href="tel:+79104320087" className="hover:text-[#66D3FF] transition-colors font-medium">
              +7 910 432 00 87
            </a>{' '}
            <span className="text-[#E5E5E5] mx-2">|</span>{' '}
            <a
              href="mailto:hello@genkoustudio.ru"
              className="hover:text-[#66D3FF] transition-colors font-medium"
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
              placeholder="+7 (___) ___-__-__"
              required
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={18}
              className={`w-full px-6 py-4 bg-white border rounded-xl text-[#1B1B1B] placeholder-[#6E7580] focus:outline-none transition-colors ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#E5E5E5] focus:border-[#66D3FF]'
              }`}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Email или ссылка на соц. сеть *"
              required
              value={formData.contacts}
              onChange={(e) => {
                setFormData({ ...formData, contacts: e.target.value });
                if (errors.contacts) {
                  setErrors({ ...errors, contacts: undefined });
                }
              }}
              className={`w-full px-6 py-4 bg-white border rounded-xl text-[#1B1B1B] placeholder-[#6E7580] focus:outline-none transition-colors ${
                errors.contacts
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#E5E5E5] focus:border-[#66D3FF]'
              }`}
            />
            {errors.contacts && (
              <p className="mt-2 text-sm text-red-500">{errors.contacts}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Название компании"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-6 py-4 bg-white border border-[#E5E5E5] rounded-xl text-[#1B1B1B] placeholder-[#6E7580] focus:outline-none focus:border-[#66D3FF] transition-colors"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              required
              checked={formData.privacy}
              onChange={(e) => {
                setFormData({ ...formData, privacy: e.target.checked });
                if (errors.privacy) {
                  setErrors({ ...errors, privacy: undefined });
                }
              }}
              className={`mt-1 mr-3 w-5 h-5 accent-[#66D3FF] ${
                errors.privacy ? 'ring-2 ring-red-500 ring-offset-2' : ''
              }`}
            />
            <label htmlFor="privacy" className={`text-sm ${errors.privacy ? 'text-red-500' : 'text-[#6E7580]'}`}>
              Я даю согласие на{' '}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#66D3FF] hover:underline transition-colors"
              >
                обработку персональных данных
              </a>
            </label>
            {errors.privacy && (
              <p className="mt-1 text-sm text-red-500 w-full">{errors.privacy}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-white text-[#1B1B1B] rounded-xl font-semibold text-lg hover:text-[#66D3FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <p className="text-green-600 text-lg font-semibold flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                Спасибо, заявка отправлена!
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-500"
            >
              Ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.
            </motion.p>
          )}
        </motion.form>
      </div>
      
      {/* Animated Gecko #2 - Money gecko next to form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-8 left-8 z-10 hidden lg:block"
      >
        <motion.div
          className="relative group cursor-pointer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          title="Заполни форму — будет profit 💸"
        >
          <img
            src="/images/money.png"
            alt="Gecko with money"
            className="w-32 h-auto select-none pointer-events-none"
          />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#1B1B1B] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Заполни форму — будет profit 💸
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
