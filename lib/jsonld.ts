import { site } from '@/lib/site';
import { projects } from '@/lib/projects';

const personId = `${site.url}/#person`;

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      alternateName: 'devgyana',
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profilepage`,
      url: `${site.url}/`,
      name: site.title,
      isPartOf: { '@id': `${site.url}/#website` },
      mainEntity: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      url: `${site.url}/`,
      jobTitle: site.jobTitle,
      description: `${site.jobTitle} and final-year Computer Engineering student at ${site.university}, Bhubaneswar.`,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: site.university,
        address: { '@type': 'PostalAddress', addressLocality: 'Bhubaneswar' },
      },
      knowsAbout: [
        'TypeScript',
        'Node.js',
        'Next.js',
        'React',
        'React Native',
        'PostgreSQL',
        'MongoDB',
        'Prisma',
        'AWS',
        'Docker',
        'Turborepo',
        'WebSockets',
      ],
      sameAs: [site.github, site.linkedin, site.leetcode, site.x],
    },
    ...projects.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      description: p.bullets[0],
      url: p.live ?? p.github,
      sameAs: p.github,
      keywords: p.tags.join(', '),
      creator: { '@id': personId },
    })),
  ],
};
