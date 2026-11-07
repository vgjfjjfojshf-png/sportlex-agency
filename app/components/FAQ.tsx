'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ locale }: { locale: string }) {
  const t = useTranslations('contact');
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-card shadow-soft">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center p-4 text-start font-medium"
          >
            {item.q}
            <ChevronDown
              size={18}
              className={`transition-transform ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && <div className="px-4 pb-4 text-sm text-navy/70">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
