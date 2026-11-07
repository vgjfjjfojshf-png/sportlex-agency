'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  role: z.enum(['player', 'lawyer', 'club', 'agent', 'other']),
  subject: z.string().min(3),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v === true, { message: 'Required' }),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { role: 'player', consent: false },
  });

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-card">
        {t('formSuccess')}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-sm font-medium mb-1">{t('formName')}</label>
        <input {...register('name')} className="w-full border border-navy/20 rounded-btn px-3 py-2" />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t('formEmail')}</label>
        <input type="email" {...register('email')} className="w-full border border-navy/20 rounded-btn px-3 py-2" />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t('formPhone')}</label>
        <input type="tel" {...register('phone')} className="w-full border border-navy/20 rounded-btn px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t('formRole')}</label>
        <select {...register('role')} className="w-full border border-navy/20 rounded-btn px-3 py-2">
          <option value="player">{t('roles.player')}</option>
          <option value="lawyer">{t('roles.lawyer')}</option>
          <option value="club">{t('roles.club')}</option>
          <option value="agent">{t('roles.agent')}</option>
          <option value="other">{t('roles.other')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t('formSubject')}</label>
        <input {...register('subject')} className="w-full border border-navy/20 rounded-btn px-3 py-2" />
        {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t('formMessage')}</label>
        <textarea {...register('message')} rows={5} className="w-full border border-navy/20 rounded-btn px-3 py-2" />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...register('consent')} />
        {t('formConsent')}
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-gold text-navy font-bold px-6 py-3 rounded-btn hover:bg-gold/90 disabled:opacity-60 w-full"
      >
        {status === 'sending' ? '...' : t('formSubmit')}
      </button>
    </form>
  );
}
