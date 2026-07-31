'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Mail, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { RevealText } from '@/components/motion/reveal-text';
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
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/gyana-rj',
    value: 'github.com/gyana-rj',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ranjangyana',
    value: 'in/ranjangyana',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:gyanaranjansahoo174@gmail.com',
    value: 'gyanaranjansahoo174@gmail.com',
  },
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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-ink text-sand">
          <div className="grid lg:grid-cols-2">
            {/* Left — CTA + socials */}
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-sand/60">
                Contact
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                <RevealText
                  words={[
                    { text: 'Let’s' },
                    { text: 'build' },
                    { text: 'something' },
                    { text: 'together.' },
                  ]}
                />
              </h2>
              <p className="mt-5 max-w-md text-sand/70 leading-relaxed">
                Have a project in mind, a role to discuss, or just want to say
                hi? My inbox is always open — I usually reply within a day.
              </p>

              <div className="mt-10 space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-sand/10 bg-sand/5 p-4 transition-colors hover:bg-sand/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-sand/10 text-sand">
                        <s.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs text-sand/60">{s.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-sand/40 transition group-hover:text-sand"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-sand/5 p-8 sm:p-12 lg:p-16">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={44} className="text-sand" />
                  <h3 className="mt-4 text-xl font-semibold">Message sent</h3>
                  <p className="mt-2 text-sm text-sand/70">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center rounded-full border border-sand/20 px-5 py-2.5 text-sm font-medium text-sand transition hover:bg-sand/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sand/80">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              autoComplete="name"
                              className="border-sand/15 bg-sand/5 text-sand placeholder:text-sand/40 focus-visible:ring-sand/30"
                              {...field}
                            />
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
                          <FormLabel className="text-sand/80">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              autoComplete="email"
                              className="border-sand/15 bg-sand/5 text-sand placeholder:text-sand/40 focus-visible:ring-sand/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sand/80">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hi..."
                              className="min-h-[140px] resize-none border-sand/15 bg-sand/5 text-sand placeholder:text-sand/40 focus-visible:ring-sand/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sand px-6 py-3 text-sm font-medium text-ink transition hover:bg-sand/90 disabled:opacity-60"
                    >
                      <Send size={16} />
                      {form.formState.isSubmitting ? 'Sending…' : 'Send message'}
                    </button>
                    {error && (
                      <p className="text-center text-sm text-red-300">{error}</p>
                    )}
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
