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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="bg-[#1B1B1B] text-white px-4 py-2 rounded-lg font-heading font-bold text-lg hover:opacity-90 transition-opacity"
          >
            GENKOU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[#1B1B1B] font-medium transition-opacity opacity-70 hover:opacity-100 ${
                  activeSection === item.id ? 'opacity-100 text-[#66D3FF]' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 border-b-2 border-[#66D3FF]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#1B1B1B] px-6 py-2.5 rounded-lg font-semibold hover:text-[#66D3FF] transition-colors"
            >
              Связаться
            </motion.a>
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
              className={`${
                activeSection === item.id ? 'text-[#66D3FF]' : 'text-[#111]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#111]"
          >
            Связаться
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

