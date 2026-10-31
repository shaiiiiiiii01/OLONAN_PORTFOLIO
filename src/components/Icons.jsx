// Simple inline SVG icons (no extra library needed).
const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const MailIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const GithubIcon = (p) => (
  <svg {...base} {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
);
export const LinkedinIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.500 1-2 2-2s2 .700 2 2.200V16" /></svg>
);
export const CodeIcon = (p) => (
  <svg {...base} {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.500 6l-3 12" /></svg>
);
export const DatabaseIcon = (p) => (
  <svg {...base} {...p}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.700 3.100 3 7 3s7-1.300 7-3V6M5 12c0 1.700 3.100 3 7 3s7-1.300 7-3" /></svg>
);
export const PencilIcon = (p) => (
  <svg {...base} {...p}><path d="M4 20l1-4L16.500 4.500a2 2 0 0 1 3 3L8 19l-4 1ZM14 7l3 3" /></svg>
);
export const ArrowIcon = (p) => (
  <svg {...base} width={14} height={14} strokeWidth={2} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
