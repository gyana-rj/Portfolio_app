'use client';

import { type ReactNode } from 'react';

/**
 * Static card wrapper with a subtle, professional hover: a small lift, a soft
 * shadow, and a slightly darker border — all via CSS transitions. The old 3D
 * cursor tilt and moving spotlight were removed for a restrained feel. API is
 * kept intact.
 */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  // Accepted for backwards compatibility; intentionally unused.
  intensity?: number;
  spotlight?: boolean;
}) {
  return (
    <div
      className={`${className ?? ''} transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_12px_32px_-12px_rgba(20,18,16,0.18)]`}
    >
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}
