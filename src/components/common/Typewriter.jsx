import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react';
import { useLoader } from '../../context/LoaderContext';
import { useSectionToken } from '../../context/SectionContext';
import { prefersReducedMotion } from '../../utils/motion';
import { textOf } from '../../utils/text';

/** Splits every string in the children tree into per-letter spans, keeping <em>/<span> nesting. */
function splitChars(children, ctx) {
  return Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return [...String(child)].map((ch) => {
        if (ch === ' ') return ' ';
        const k = ctx.i++;
        return (
          <span key={`c${k}`} className={`ch${ctx.on ? ' on' : ''}`} style={{ '--d': `${k * ctx.step}ms` }} aria-hidden="true">
            {ch}
          </span>
        );
      });
    }
    if (isValidElement(child)) return cloneElement(child, {}, splitChars(child.props.children, ctx));
    return child;
  });
}

/**
 * Letter-by-letter headline.
 * mode="ready": types once the loader is done (hero headline).
 * mode="view":  types each time 60% of it scrolls into view (hero "Hi, I'm Joyce").
 */
export default function Typewriter({ as: Tag = 'h1', className = '', step = 38, delay = 400, mode = 'ready', children }) {
  const ref = useRef(null);
  const { ready } = useLoader();
  const token = useSectionToken();
  const [on, setOn] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || mode !== 'ready' || !ready) return undefined;
    setOn(false);
    const t = setTimeout(() => setOn(true), delay);
    return () => clearTimeout(t);
  }, [ready, token, mode, delay]);

  useEffect(() => {
    if (prefersReducedMotion || mode !== 'view' || !ready || !ref.current) return undefined;
    setOn(false);
    let seen = false;
    let timer;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[entries.length - 1];
        if (e.intersectionRatio >= 0.6) {
          if (seen) return;
          seen = true;
          clearTimeout(timer);
          setOn(false);
          timer = setTimeout(() => setOn(true), delay);
        } else if (!e.isIntersecting) {
          seen = false;
          clearTimeout(timer);
          setOn(false);
        }
      },
      { threshold: [0, 0.6] },
    );
    io.observe(ref.current);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [ready, token, mode, delay]);

  return (
    <Tag ref={ref} className={`${className} tw`.trim()} aria-label={textOf(children)}>
      {splitChars(children, { i: 0, step, on })}
    </Tag>
  );
}
