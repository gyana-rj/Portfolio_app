import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Cursor } from '@/components/motion/cursor';
import { ScrollProgress } from '@/components/motion/scroll-progress';

const inter = Outfit({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gyana Ranjan Sahoo — Full-Stack Developer',
  description:
    'Full-stack developer building reliable, scalable systems with a polished product layer. TypeScript, Node.js, Next.js, PostgreSQL, MongoDB, AWS.',
  authors: [{ name: 'Gyana Ranjan Sahoo' }],

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div
          aria-hidden
          className="grid-bg pointer-events-none fixed inset-0 -z-10"
        />
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
