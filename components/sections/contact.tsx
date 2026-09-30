'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { site } from '@/lib/site';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name (min 2 characters).'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message should be at least 10 characters.'),
});

type Values = z.infer<typeof schema>;

const socials = [
  { icon: Github, label: 'GitHub', href: site.github, value: 'github.com/gyana-rj' },
  { icon: Linkedin, label: 'LinkedIn', href: site.linkedin, value: 'in/ranjangyana' },
  { icon: Mail, label: 'Email', href: `mailto:${site.email}`, value: site.email },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: Values) => {
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error ?? 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="contact" className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="label">contact.</h2>
          <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something together.
          </p>
          <p className="mt-3 text-muted-foreground">
            Open to roles, freelance work, and collaboration. I usually reply
            within a day.
          </p>

          <ul className="mt-6 divide-y divide-border border-y border-border">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5 text-sm"
                >
                  <span className="flex items-center gap-3">
                    <s.icon size={16} className="text-muted-foreground" />
                    <span className="font-medium">{s.label}</span>
                  </span>
                  <span className="flex min-w-0 items-center gap-2 text-muted-foreground transition-colors group-hover:text-foreground">
                    <span className="truncate">{s.value}</span>
                    <ArrowUpRight size={14} className="shrink-0" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10">
          {submitted ? (
            <div className="rounded-xl border border-border p-6 text-center">
              <h3 className="font-semibold">Message sent</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:bg-secondary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" autoComplete="name" className="border-border bg-background/60 placeholder:text-muted-foreground/60 focus-visible:ring-foreground/30" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" autoComplete="email" className="border-border bg-background/60 placeholder:text-muted-foreground/60 focus-visible:ring-foreground/30" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project or just say hi..." className="border-border bg-background/60 placeholder:text-muted-foreground/60 focus-visible:ring-foreground/30 min-h-[130px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="inline-flex items-center rounded-lg bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:bg-foreground/85 disabled:opacity-60"
                >
                  {form.formState.isSubmitting ? 'Sending…' : 'Send message'}
                </button>
                {error && <p className="text-sm text-red-400">{error}</p>}
              </form>
            </Form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
