'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-soft">
      <div className="container flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="text-xl font-extrabold">
          Sport<span className="text-gold">Lex</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-gold transition">
              {l.label}
            </Link>
          ))}
          <Link
            href={`/${otherLocale}`}
            className="text-xs px-3 py-1 border border-white/30 rounded-btn hover:bg-white/10"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-gold text-navy text-sm font-bold px-4 py-2 rounded-btn hover:bg-gold/90 transition"
          >
            {t('cta')}
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href={`/${otherLocale}`} className="text-xs text-gold" onClick={() => setOpen(false)}>
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-gold text-navy text-sm font-bold px-4 py-2 rounded-btn text-center"
            onClick={() => setOpen(false)}
          >
            {t('cta')}
          </Link>
        </div>
      )}
    </header>
  );
}
