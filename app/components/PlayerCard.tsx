'use client';

import { useTranslations } from 'next-intl';
import { User } from 'lucide-react';

export default function PlayerCard({ player, locale }: { player: any; locale: string }) {
  const t = useTranslations('players');
  const initials = player.name.split(' ').map((n: string) => n[0]).join('');

  return (
    <div className="bg-offwhite rounded-card p-6 shadow-soft lift text-center">
      <div className="w-20 h-20 rounded-full bg-navy text-gold flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {initials}
      </div>
      <h3 className="font-bold text-lg">{player.name}</h3>
      <p className="text-sm text-navy/60 mb-2">
        {player.age} • {player.position} • {player.flag} {player.country}
      </p>
      <p className="text-xs text-navy/50 mb-4">{player.club}</p>
      <button
        disabled
        className="text-xs text-gold border border-gold px-3 py-1 rounded-btn opacity-60 cursor-not-allowed"
      >
        {t('viewProfile')}
      </button>
    </div>
  );
}
