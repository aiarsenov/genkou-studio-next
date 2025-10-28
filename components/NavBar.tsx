'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
            className="bg-[#1B1B1B] text-white px-4 py-2 rounded-lg font-heading font-bold text-lg hover:opacity-90 hover-neon transition-all"
          >
            GENKOU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[#1B1B1B] font-medium transition-colors hover:text-[#C7FF6E] hover-neon ${
                  activeSection === item.id ? 'text-[#C7FF6E]' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 border-b-2 border-[#C7FF6E]"
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
              className="bg-[#1B1B1B] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#6E7580] hover-neon transition-all"
            >
              Связаться
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1B1B1B] p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

