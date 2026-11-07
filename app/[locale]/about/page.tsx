import { useTranslations } from 'next-intl';
import { Scale, Lightbulb, Shield, Star } from 'lucide-react';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('about');
  const locale = params.locale;

  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('headerTitle')}</h1>
          <p className="text-white/70 text-lg">{t('headerSubtitle')}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="bg-offwhite p-8 rounded-card">
            <h2 className="text-2xl font-extrabold mb-4 text-gold">{t('missionTitle')}</h2>
            <p className="text-navy/70">{t('missionDesc')}</p>
          </div>
          <div className="bg-offwhite p-8 rounded-card">
            <h2 className="text-2xl font-extrabold mb-4 text-gold">{t('visionTitle')}</h2>
            <p className="text-navy/70">{t('visionDesc')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="container max-w-2xl">
          <div className="bg-white p-8 rounded-card shadow-soft text-center">
            <div className="w-24 h-24 rounded-full bg-navy text-gold flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              SL
            </div>
            <h2 className="text-xl font-extrabold mb-1">[اسم المؤسس]</h2>
            <p className="text-sm text-gold mb-4">{t('founderTitle')}</p>
            <p className="text-sm text-navy/70">{t('founderBio')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-12">{t('valuesTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Scale, key: 'v1' },
              { icon: Lightbulb, key: 'v2' },
              { icon: Shield, key: 'v3' },
              { icon: Star, key: 'v4' },
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-gold" size={28} />
                </div>
                <p className="font-bold text-sm">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-center mb-12">{t('timelineTitle')}</h2>
          <div className="space-y-8">
            {[
              { year: '2026', key: 't1' },
              { year: '2027', key: 't2' },
              { year: '2028', key: 't3' },
            ].map(({ year, key }) => (
              <div key={year} className="flex gap-6 items-start">
                <div className="bg-gold text-navy font-extrabold px-4 py-2 rounded-btn shrink-0">
                  {year}
                </div>
                <p className="text-navy/70 pt-2">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
