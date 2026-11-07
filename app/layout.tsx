import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SportLex | Sports Law & Talent Agency',
  description: 'Hybrid sports law agency: women\'s football talent, legal consulting, and esports management.',
  metadataBase: new URL('https://sportlex.ma'),
  openGraph: {
    title: 'SportLex',
    description: 'We represent talent. We protect rights. We open doors.',
    url: 'https://sportlex.ma',
    siteName: 'SportLex',
    images: ['/og-image.jpg'],
    locale: 'ar_MA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
