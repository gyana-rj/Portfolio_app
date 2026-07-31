'use client';

import { type ReactNode } from 'react';

/**
 * Static wrapper. The cursor-follow "magnetic" pull was removed in favour of a
 * calmer, more professional feel; this keeps the layout and API intact.
 */
export function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  // Accepted for backwards compatibility; intentionally unused.
  strength?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
