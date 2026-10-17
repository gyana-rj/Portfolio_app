import { ImageResponse } from 'next/server';
import { site } from '@/lib/site';

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0a0a0a',
          color: '#fafafa',
        }}
      >
        <div style={{ fontSize: 28, color: '#a1a1aa', marginBottom: 24 }}>
          devgyana.in
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, color: '#d4d4d8', marginTop: 24 }}>
          Full-Stack Developer
        </div>
        <div style={{ fontSize: 28, color: '#a1a1aa', marginTop: 40 }}>
          Next.js · Node.js · TypeScript · PostgreSQL · AWS
        </div>
      </div>
    ),
    size
  );
}
