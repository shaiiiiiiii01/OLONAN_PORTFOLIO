/**
 * Skill icons are small inline SVGs kept exactly as designed.
 * `body` is the inner SVG markup; SkillIcon renders it.
 */
const tx = (t, c, s = 13) =>
  `<text x="20" y="25" text-anchor="middle" font-size="${s}" font-weight="700" fill="${c}" font-family="JetBrains Mono,monospace">${t}</text>`;

const hex = (fill) => `<polygon points="20,3 34.5,11.5 34.5,28.5 20,37 5.5,28.5 5.5,11.5" fill="${fill}"/>`;

const shield = (a, b) =>
  `<path d="M6 4h28l-2.5 28L20 36 8.5 32z" fill="${a}"/><path d="M20 8v24l9-2.6L31 8z" fill="${b}"/>`;

const github =
  '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>';

const react =
  '<g fill="none" stroke="#61dafb" stroke-width="2"><ellipse cx="20" cy="20" rx="17" ry="6.5"/><ellipse cx="20" cy="20" rx="17" ry="6.5" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="17" ry="6.5" transform="rotate(120 20 20)"/></g><circle cx="20" cy="20" r="2.8" fill="#61dafb"/>';

const tailwind =
  '<path d="M20 9c-5 0-8 2.5-9 7.5 2-2.5 4.2-3.5 6.8-2.8 1.5.4 2.5 1.5 3.6 2.7C23.2 18.3 25 20 29 20c5 0 8-2.5 9-7.5-2 2.5-4.2 3.5-6.8 2.8-1.5-.4-2.5-1.5-3.6-2.7C25.8 10.7 24 9 20 9zM11 20c-5 0-8 2.5-9 7.5 2-2.5 4.2-3.5 6.8-2.8 1.5.4 2.5 1.5 3.6 2.7C14.2 29.3 16 31 20 31c5 0 8-2.5 9-7.5-2 2.5-4.2 3.5-6.8 2.8-1.5-.4-2.5-1.5-3.6-2.7C16.8 21.7 15 20 11 20z" fill="#38bdf8" transform="translate(0 -1)"/>';

const python =
  '<path d="M19.5 4C13 4 13.4 6.8 13.4 6.8V10h6.3v1H10.9S6.7 10.5 6.7 17.2s3.7 6.4 3.7 6.4h2.2v-3.1s-.2-3.7 3.6-3.7h6.2s3.5.1 3.5-3.4V8.2S26.4 4 19.5 4z" fill="#3776ab"/><path d="M20.5 36c6.5 0 6.1-2.8 6.1-2.8V30h-6.3v-1h8.8s4.2.5 4.2-6.2-3.7-6.4-3.7-6.4h-2.2v3.1s.2 3.7-3.6 3.7h-6.2s-3.5-.1-3.5 3.4v5.7S13.6 36 20.5 36z" fill="#ffc331"/><circle cx="16.4" cy="7.6" r="1.1" fill="#fff"/><circle cx="23.6" cy="32.4" r="1.1" fill="#fff"/>';

const git =
  '<rect x="8" y="8" width="24" height="24" rx="4" transform="rotate(45 20 20)" fill="#f05133"/><path d="M16 20l8-5M16 20l8 6" stroke="#fff" stroke-width="2"/><g fill="#fff"><circle cx="16" cy="20" r="2.6"/><circle cx="24" cy="15" r="2.6"/><circle cx="24" cy="26" r="2.6"/></g>';

export const skills = [
  { name: 'HTML', body: shield('#e8622c', '#f48a50') + tx('5', '#fff', 14) },
  { name: 'CSS', body: shield('#2a77c9', '#4a95e0') + tx('3', '#fff', 14) },
  { name: 'JavaScript', body: '<rect x="4" y="4" width="32" height="32" rx="3" fill="#f7df1e"/>' + tx('JS', '#1a1220', 14) },
  { name: 'PHP', body: '<ellipse cx="20" cy="20" rx="18" ry="11" fill="#7a86b8"/>' + tx('php', '#fff', 12) },
  { name: 'Java', body: '<text x="20" y="29" text-anchor="middle" font-size="26">☕</text>' },
  { name: 'Python', body: python },
  { name: 'C', body: hex('#5c6bc0') + tx('C', '#fff', 18) },
  { name: 'C++', body: hex('#00599c') + tx('C++', '#fff', 13) },
  { name: 'MySQL', body: '<rect x="3" y="8" width="34" height="24" rx="8" fill="#00758f"/>' + tx('SQL', '#fff', 11) },
  { name: 'Git', body: git },
  { name: 'GitHub', body: github, viewBox: '0 0 16 16', fill: '#fff' },
  { name: 'React', body: react },
  { name: 'Tailwind', body: tailwind },
  { name: 'VS Code', body: '<rect x="3" y="3" width="34" height="34" rx="9" fill="#2f80ed"/>' + tx('&lt;/&gt;', '#fff', 12) },
  { name: 'Laragon', body: '<rect x="3" y="3" width="34" height="34" rx="9" fill="#0e83cd"/>' + tx('L', '#fff', 18) },
];
