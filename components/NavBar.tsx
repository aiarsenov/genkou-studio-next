'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'contacts'];
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Блокируем скролл при открытом меню
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { key: 'portfolio', href: '#portfolio', label: 'Портфолио', id: 'portfolio' },
    { key: 'education', href: '#', label: 'Обучение', id: null, disabled: true },
    { key: 'contacts', href: '#contacts', label: 'Контакты', id: 'contacts' },
    { key: 'contact-cta', href: '#contacts', label: 'Связаться', id: 'contacts' },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-8 left-0 right-0 z-40 pointer-events-none"
      >
        <div className="max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-block font-heading tracking-[0.2em] text-[26px] lg:text-[30px] uppercase text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] pointer-events-auto"
          >
            GENKOU STUDIO
          </Link>
        </div>
      </motion.div>

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        className="relative z-30 mt-24"
      >
        <div className="max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-center">
            <div className="md:hidden" />
            <nav className="hidden md:flex items-center space-x-12 lg:space-x-16">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(event) => {
                    if (item.disabled) {
                      event.preventDefault();
                    }
                  }}
                  className={`relative font-sans font-semibold text-[16px] tracking-[0.04em] transition-colors ${
                    item.disabled
                      ? 'text-[#101820]/40 cursor-default'
                      : item.id && activeSection === item.id
                      ? 'text-[#101820]'
                      : 'text-[#101820]/70 hover:text-[#101820]'
                  }`}
                >
                  {item.label}
                  {item.id && activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-[#101820]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 420, damping: 35 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <button
              className={`burger ${isMenuOpen ? 'active' : ''} md:hidden`}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="mobile-menu-overlay fixed inset-0 bg-black/50 z-[999]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(event) => {
                if (item.disabled) {
                  event.preventDefault();
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className={`font-sans font-semibold text-lg tracking-[0.08em] ${
                item.disabled
                  ? 'opacity-50 cursor-default'
                  : item.id && activeSection === item.id
                  ? 'text-[#66D3FF]'
                  : 'text-[#111]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.header>
    </>
  );
}

