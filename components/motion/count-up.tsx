'use client';

/**
 * Renders a stat value as-is. Kept static (no scroll-triggered counting) so
 * the numbers read cleanly and never flash a "0" while animating.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  // Accepted for backwards compatibility; intentionally unused.
  duration?: number;
  className?: string;
}) {
  return <p className={className}>{value}</p>;
}
