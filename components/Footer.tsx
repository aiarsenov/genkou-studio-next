'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F1A26] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GENKOU STUDIO</h3>
            <p className="text-gray-400">
              Создаем креатив и моушн-графику для рекламы и мероприятий
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:+79104320087"
                  className="hover:text-[#D7FB72] transition-colors"
                >
                  +7 910 432 00 87
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@genkoustudio.ru"
                  className="hover:text-[#D7FB72] transition-colors"
                >
                  hello@genkoustudio.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-[#D7FB72] transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GENKOU STUDIO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

