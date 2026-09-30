'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
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
    <section id="contact" className="pt-28 sm:pt-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Open to roles, freelance work, and collaboration. Whether you have
            a project in mind or just want to talk tech, I&apos;d love to hear
            from you.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition hover:bg-foreground/85"
            >
              <Mail size={16} />
              Get in touch
            </a>
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Gyana_Ranjan_Sahoo_Resume.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-foreground/80 px-5 text-sm font-medium transition hover:bg-foreground hover:text-background"
              >
                <FileText size={16} />
                Download Resume
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-12 place-items-center rounded-md text-foreground/80 transition hover:bg-secondary hover:text-foreground"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>

          <p className="mt-8 text-foreground/90">
            Open to full-stack, backend, and AI-agent engineering roles
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Response time: usually within 24 hours
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl">
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
