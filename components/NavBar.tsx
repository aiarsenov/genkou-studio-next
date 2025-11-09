'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'clients', 'portfolio', 'contacts'];
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
    { key: 'clients', href: '#clients', label: 'Клиенты', id: 'clients' },
    { key: 'contacts', href: '#contacts', label: 'Контакты', id: 'contacts' },
    { key: 'contact-cta', href: '#contacts', label: 'Связаться', id: 'contacts' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-[0_15px_35px_rgba(0,0,0,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link
              href="/"
              className="text-[#101820] font-heading tracking-[0.15em] text-[26px] lg:text-[30px] uppercase hover:opacity-80 transition-opacity"
            >
              GENKOU STUDIO
            </Link>

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

          <nav
            className={`flex md:hidden flex-col items-center gap-4 text-[#101820] font-sans font-semibold text-lg tracking-[0.06em] pb-6 transition-all duration-300 ${
              isScrolled ? '' : 'opacity-0 pointer-events-none'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${activeSection === item.id ? 'text-[#66D3FF]' : 'text-[#111]'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
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
              onClick={() => setIsMenuOpen(false)}
              className={`font-sans font-semibold text-lg tracking-[0.08em] ${
                activeSection === item.id ? 'text-[#66D3FF]' : 'text-[#111]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.header>

      <div className="hidden md:block absolute top-[15.25rem] left-[61%] -translate-x-1/2 w-[min(560px,60vw)] z-40">
        <nav className="flex items-center justify-between text-[#101820] font-sans font-semibold text-[17px] tracking-[0.05em]">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`relative transition-colors ${
                activeSection === item.id ? 'text-[#101820]' : 'text-[#101820]/70 hover:text-[#101820]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="heroNavUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-[#101820]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 420, damping: 35 }}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

