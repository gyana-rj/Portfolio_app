'use client';

export type Word = { text: string; className?: string };

/**
 * Renders a headline made of individually styleable words. Kept static and
 * always visible for a clean, professional read — no masked or staggered
 * entrance that could leave the text blank while it animates in.
 */
export function RevealText({
  words,
  className,
}: {
  words: Word[];
  className?: string;
  // Accepted for backwards compatibility; intentionally unused.
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w.text}-${i}`} className={w.className}>
          {w.text}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
