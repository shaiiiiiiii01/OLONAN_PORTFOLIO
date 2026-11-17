import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../../utils/motion';

/** Counts from 00 up to `to` over 1.2s when `active`; resets to 00 when not. */
export default function CountUp({ to, active }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return undefined;
    }
    if (prefersReducedMotion) {
      setValue(to);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const frame = (t) => {
      const p = Math.min((t - t0) / 1200, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);

  return <strong>{String(value).padStart(2, '0')}</strong>;
}
