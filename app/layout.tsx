import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ScrollProgress } from '@/components/motion/scroll-progress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans font-medium`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
