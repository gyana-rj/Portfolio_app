'use client';

/**
 * A simple static underline accent. The animated "hand-drawn" stroke (anime.js)
 * was removed for a cleaner, more professional look. API is kept intact.
 */
export function DrawUnderline({
  className,
}: {
  // Accepted for backwards compatibility; intentionally unused.
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-hidden>
      <svg
        viewBox="0 0 300 12"
        fill="none"
        preserveAspectRatio="none"
        className="h-3 w-full"
      >
        <path
          d="M2 8.5C48 3.5 104 2.5 150 4.5C196 6.5 252 8 298 4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
