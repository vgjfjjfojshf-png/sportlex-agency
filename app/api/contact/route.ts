import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  role: z.enum(['player', 'lawyer', 'club', 'agent', 'other']),
  subject: z.string().min(3),
  message: z.string().min(10),
  consent: z.boolean(),
  honeypot: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    await resend.emails.send({
      from: 'SportLex <noreply@sportlex.ma>',
      to: process.env.CONTACT_EMAIL || 'contact@sportlex.ma',
      subject: `[SportLex] ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
