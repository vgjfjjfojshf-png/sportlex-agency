import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Scale, Trophy, Gamepad2, Search, Shield, Handshake } from 'lucide-react';
import PlayerCard from '../components/PlayerCard';

const players = [
  { name: 'Zoe October', age: 18, position: 'FW', flag: '🇿🇦', country: 'South Africa', club: 'UWC FC' },
  { name: 'Khouloud Ournani', age: 21, position: 'FW', flag: '🇩🇿', country: 'Algeria', club: 'CF Akbou' },
  { name: 'Deborah Henry', age: 23, position: 'Winger', flag: '🇲🇼', country: 'Malawi', club: 'Silver Strikers' },
  { name: 'Mercy Sikelo', age: 22, position: 'GK', flag: '🇲🇼', country: 'Malawi', club: 'Civil Service' },
];

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const locale = params.locale;

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-24">
        <div className="container text-center max-w-3xl fade-in">
          <p className="text-gold text-sm font-semibold mb-4">{t('hero.eyebrow')}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-white/70 text-lg mb-8">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/services`} className="bg-gold text-navy font-bold px-6 py-3 rounded-btn hover:bg-gold/90">
              {t('hero.ctaPrimary')}
            </Link>
            <Link href={`/${locale}/contact`} className="border border-white/40 px-6 py-3 rounded-btn hover:bg-white/10">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-12">{t('pillars.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Scale, key: 'law' },
              { icon: Trophy, key: 'football' },
              { icon: Gamepad2, key: 'esports' },
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="bg-offwhite rounded-card p-8 shadow-soft lift">
                <Icon className="text-gold mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{t(`pillars.${key}.title`)}</h3>
                <p className="text-sm text-navy/70 mb-4">{t(`pillars.${key}.desc`)}</p>
                <Link href={`/${locale}/services`} className="text-gold text-sm font-bold">
                  {t('pillars.learnMore')} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-offwhite">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-12">{t('howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Search, t: 'step1' },
              { icon: Shield, t: 'step2' },
              { icon: Handshake, t: 'step3' },
            ].map(({ icon: Icon, t: step }) => (
              <div key={step} className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-gold" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`howItWorks.${step}Title`)}</h3>
                <p className="text-sm text-navy/70">{t(`howItWorks.${step}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-navy text-white">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '20+', label: t('stats.players') },
            { num: '3', label: t('stats.sectors') },
            { num: '8', label: t('stats.markets') },
            { num: '100%', label: t('stats.compliance') },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold text-gold mb-2">{s.num}</div>
              <div className="text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PLAYERS */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-12">{t('players.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((p) => (
              <PlayerCard key={p.name} player={p} locale={locale} />
            ))}
          </div>
          <p className="text-center text-xs text-navy/50 mt-8">{t('players.disclaimer')}</p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gold text-navy">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">{t('ctaBanner.title')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact?type=player`} className="border-2 border-navy px-6 py-3 rounded-btn font-bold hover:bg-navy hover:text-white transition">
              {t('ctaBanner.player')}
            </Link>
            <Link href={`/${locale}/contact?type=lawyer`} className="border-2 border-navy px-6 py-3 rounded-btn font-bold hover:bg-navy hover:text-white transition">
              {t('ctaBanner.lawyer')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
