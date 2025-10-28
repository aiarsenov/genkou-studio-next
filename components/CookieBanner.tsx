'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли согласие в localStorage
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        Мы используем cookie-файлы, чтобы сайт работал корректно и улучшался. Подробнее —{' '}
        <Link href="/privacy">в Политике конфиденциальности</Link>.
      </p>
      <button id="cookie-accept" onClick={handleAccept}>
        OK
      </button>
    </div>
  );
}

