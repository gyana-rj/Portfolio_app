import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Cursor } from '@/components/motion/cursor';
import { ScrollProgress } from '@/components/motion/scroll-progress';
import { site } from '@/lib/site';
import { jsonLd } from '@/lib/jsonld';

const inter = Outfit({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  themeColor: '#0a0a0a',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_IN',
    firstName: 'Gyana Ranjan',
    lastName: 'Sahoo',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
