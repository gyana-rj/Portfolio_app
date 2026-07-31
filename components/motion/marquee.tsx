'use client';

import { motion, useAnimationFrame, useMotionValue, wrap } from 'framer-motion';

/**
 * Calm, constant-speed skills ticker. The previous version reacted to scroll
 * velocity (accelerating and reversing direction); that gimmick was removed for
 * a steady, professional drift.
 */
export function VelocityMarquee({
  items,
  baseVelocity = 3,
  className,
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);

  // Four copies are rendered, so one full cycle is 25% of the track.
  const transformed = useMotionValue('-25%');

  useAnimationFrame((_, delta) => {
    const next = baseX.get() + baseVelocity * (delta / 1000);
    baseX.set(next);
    transformed.set(`${wrap(-50, -25, next)}%`);
  });

  return (
    <div className={`relative flex overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        style={{ x: transformed }}
      >
        {Array.from({ length: 4 }).map((_, copy) => (
          <span key={copy} className="flex flex-nowrap items-center">
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-6 text-3xl font-bold tracking-tight text-ink-muted sm:text-4xl">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/20" />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
