import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../../utils/motion';

const AURA = [
  { width: 620, height: 620, background: '#c2255c', opacity: 0.38, top: -160, right: -140, '--d': '20s' },
  { width: 560, height: 560, background: '#5b2bb8', opacity: 0.42, top: '38%', left: -180, '--d': '24s' },
  { width: 520, height: 520, background: '#d6336c', opacity: 0.28, bottom: -160, right: '12%', '--d': '22s' },
];

/** Drifting colour blobs plus a soft glow that follows the pointer (hover-capable devices only). */
export default function Background() {
  const glow = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !window.matchMedia('(hover:hover)').matches) return undefined;
    const move = (e) => {
      glow.current?.style.setProperty('--gx', `${e.clientX}px`);
      glow.current?.style.setProperty('--gy', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <div id="aura" aria-hidden="true">
        {AURA.map((style, i) => (
          <i key={i} style={style} />
        ))}
      </div>
      <div id="glow" ref={glow} aria-hidden="true" />
    </>
  );
}
