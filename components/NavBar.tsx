'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '#education', label: 'Обучение' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#contacts', label: 'Контакты' },
  { href: '#contacts', label: 'Связаться' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10 py-6">
        <Link
          href="/"
          className="text-[22px] md:text-[26px] font-heading tracking-[0.18em] uppercase text-[#101820]"
        >
          GENKOU STUDIO
        </Link>

        <nav className="hidden md:flex gap-10 text-base font-semibold text-[#101820] tracking-[0.04em]">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="relative pb-1 transition-colors hover:text-[#101820]/70 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#101820] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-3xl text-[#101820]"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white border-t py-4 shadow-sm text-lg font-medium text-[#101820]">
          {links.map((link) => (
            <Link
              key={link.href + link.label + '-mobile'}
              href={link.href}
              className="transition-colors hover:text-[#101820]/70"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

