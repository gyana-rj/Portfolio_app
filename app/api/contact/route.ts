import { NextResponse } from 'next/server';
import { z } from 'zod';

// Keep validation identical to the client form.
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// Runs on the Node runtime so the API key never reaches the client.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form fields and try again.' },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  // `onboarding@resend.dev` works with any Resend key without domain setup,
  // so the form delivers with just RESEND_API_KEY configured.
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO_EMAIL || 'gyanaranjansahoo174@gmail.com';

  if (!apiKey) {
    // Email isn't configured yet — surface a clear, non-crashing error.
    return NextResponse.json(
      { error: 'Email is not configured on the server yet.' },
      { status: 503 }
    );
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Resend delivery failed:', res.status, detail);
      return NextResponse.json(
        { error: 'Could not send your message right now. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'Could not send your message right now. Please try again.' },
      { status: 500 }
    );
  }
}
