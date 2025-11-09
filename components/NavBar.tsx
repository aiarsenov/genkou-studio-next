'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#clients', label: 'Клиенты' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#contacts', label: 'Контакты' },
  { href: '#contacts', label: 'Связаться' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <Link
          href="/"
          className="text-[22px] md:text-[26px] font-heading tracking-[0.18em] uppercase text-[#101820]"
        >
          GENKOU STUDIO
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-[#101820] tracking-[0.04em]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-[#101820]/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-3xl text-[#101820]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white shadow-sm">
          <div className="flex flex-col items-center gap-4 py-4 text-lg font-semibold text-[#101820]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[#101820]/70"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

