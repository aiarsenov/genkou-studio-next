'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo */}
          <div className="bg-[#1B1B1B] text-white px-4 py-2 rounded-lg font-heading font-bold text-lg">
            GENKOU
          </div>

          {/* Contacts */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[#1B1B1B]">
            <a
              href="tel:+79104320087"
              className="hover:text-[#66D3FF] transition-colors font-medium"
            >
              +7 910 432 00 87
            </a>
            <span className="hidden md:inline text-[#E5E5E5]">|</span>
            <a
              href="mailto:hello@genkoustudio.ru"
              className="hover:text-[#66D3FF] transition-colors font-medium"
            >
              hello@genkoustudio.ru
            </a>
            <span className="hidden md:inline text-[#E5E5E5]">|</span>
            <Link
              href="/privacy"
              className="hover:text-[#66D3FF] transition-colors font-medium"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
