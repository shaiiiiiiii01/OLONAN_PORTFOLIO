/** True when the visitor asked their OS/browser for reduced motion. Read once, like the original design. */
export const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
