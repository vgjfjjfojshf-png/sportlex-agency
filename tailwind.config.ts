import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        gold: '#C9A227',
        electric: '#1E90FF',
        offwhite: '#F8F9FB',
      },
      fontFamily: {
        arabic: ['Tajawal', 'IBM Plex Sans Arabic', 'sans-serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(10,31,68,0.08)',
        lift: '0 8px 32px rgba(10,31,68,0.12)',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
