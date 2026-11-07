import { useTranslations } from 'next-intl';
import { Scale, Trophy, Gamepad2, Check } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('services');
  const locale = params.locale;

  const sectors = [
    { key: 'law', icon: Scale, bullets: ['b1', 'b2', 'b3', 'b4'] },
    { key: 'football', icon: Trophy, bullets: ['b1', 'b2', 'b3', 'b4'] },
    { key: 'esports', icon: Gamepad2, bullets: ['b1', 'b2', 'b3', 'b4'] },
  ] as const;

  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('headerTitle')}</h1>
          <p className="text-white/70 text-lg">{t('headerSubtitle')}</p>
        </div>
      </section>

      {sectors.map(({ key, icon: Icon, bullets }, i) => (
        <section key={key} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}>
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <Icon className="text-gold mb-4" size={48} />
              <h2 className="text-3xl font-extrabold mb-4">{t(`${key}.title`)}</h2>
              <p className="text-navy/70 mb-6">{t(`${key}.desc`)}</p>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="text-gold mt-1 shrink-0" size={18} />
                    <span className="text-sm">{t(`${key}.${b}`)}</span>
                  </li>
                ))}
              </ul>
              {key === 'law' && (
                <p className="text-xs text-navy/50 mt-6 italic">{t('law.note')}</p>
              )}
            </div>
            <div className={`bg-navy/5 rounded-card p-12 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <Icon className="text-gold/40" size={160} />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gold text-navy">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-extrabold">{t('ctaTitle')}</h2>
          <Link
            href={`/${locale}/contact`}
            className="bg-navy text-white px-6 py-3 rounded-btn font-bold hover:bg-navy/90"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
