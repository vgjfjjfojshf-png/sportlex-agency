import { useTranslations } from 'next-intl';
import ContactForm from '@/app/components/ContactForm';
import FAQ from '@/app/components/FAQ';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('contact');
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
        <div className="container grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="bg-navy text-white p-8 rounded-card">
            <h2 className="text-xl font-extrabold mb-6">{t('headerTitle')}</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Mail className="text-gold" size={18} /> {t('infoEmail')}</li>
              <li className="flex items-center gap-3"><Phone className="text-gold" size={18} /> {t('infoPhone')}</li>
              <li className="flex items-center gap-3"><MapPin className="text-gold" size={18} /> {t('infoAddress')}</li>
              <li className="flex items-center gap-3"><Clock className="text-gold" size={18} /> {t('infoHours')}</li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="X"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-extrabold text-center mb-8">{t('faqTitle')}</h2>
          <FAQ locale={locale} />
        </div>
      </section>
    </>
  );
}
