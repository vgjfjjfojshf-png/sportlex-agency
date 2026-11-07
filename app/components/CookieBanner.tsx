'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-navy text-white p-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm">{t('text')}</p>
      <div className="flex gap-2">
        <button onClick={accept} className="bg-gold text-navy px-4 py-2 rounded-btn text-sm font-bold">
          {t('accept')}
        </button>
        <a href="/privacy" className="border border-white/30 px-4 py-2 rounded-btn text-sm">
          {t('learnMore')}
        </a>
      </div>
    </div>
  );
}
