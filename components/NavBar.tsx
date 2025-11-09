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
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['hero', 'clients', 'portfolio', 'contacts'];
      const scrollPosition = window.scrollY + 100;
      
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
    { href: '#clients', label: 'Клиенты', id: 'clients' },
    { href: '#portfolio', label: 'Портфолио', id: 'portfolio' },
    { href: '#contacts', label: 'Контакты', id: 'contacts' },
    { href: '#contacts', label: 'Связаться', id: 'contact-link' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#101820] font-heading tracking-[0.15em] text-[26px] lg:text-[30px] uppercase hover:opacity-80 transition-opacity"
          >
            GENKOU STUDIO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 lg:space-x-16">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[#101820] font-sans font-semibold tracking-[0.24em] uppercase text-[13px] transition-opacity ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.label}
                {activeSection === item.id && item.id !== 'contact-link' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#1B1B1B]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`burger ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-overlay fixed inset-0 bg-black/50 z-[999]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`${activeSection === item.id ? 'text-[#66D3FF]' : 'text-[#111]'} font-sans font-semibold uppercase tracking-[0.24em]`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

