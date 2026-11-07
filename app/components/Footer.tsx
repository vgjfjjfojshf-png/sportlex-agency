import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-navy text-white mt-20">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-extrabold mb-3">
            Sport<span className="text-gold">Lex</span>
          </h3>
          <p className="text-sm text-white/70 mb-2">{t('tagline')}</p>
          <p className="text-xs text-white/50">{t('desc')}</p>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-gold">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href={`/${locale}`}>{useTranslations('nav')('home')}</Link></li>
            <li><Link href={`/${locale}/services`}>{useTranslations('nav')('services')}</Link></li>
            <li><Link href={`/${locale}/about`}>{useTranslations('nav')('about')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{useTranslations('nav')('contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-gold">{t('legal')}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href={`/${locale}/privacy`}>{t('privacy')}</Link></li>
            <li><Link href={`/${locale}/terms`}>{t('terms')}</Link></li>
            <li><Link href={`/${locale}/disclaimer`}>{t('disclaimer')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-gold">{t('contact')}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>contact@sportlex.ma</li>
            <li>+212 XXX XXX XXX</li>
            <li>الدار البيضاء، المغرب</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="X"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        {t('copyright')}
      </div>
    </footer>
  );
}
