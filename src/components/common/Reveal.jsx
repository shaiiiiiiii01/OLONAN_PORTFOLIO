import { useCallback, useEffect, useRef, useState } from 'react';
import { useLoader } from '../../context/LoaderContext';
import { useSectionToken } from '../../context/SectionContext';

/**
 * Scroll-reveal wrapper (the design's `.rv` / `.in` behaviour).
 * - Fades in when 15% visible, resets when it leaves, so it replays on re-entry.
 * - Waits for the first-visit loader to finish.
 * - Replays when its section is opened from the navbar (section token changes).
 * - `children` may be a function receiving `shown`, so inner pieces (counters, terminal) can react.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay, style, innerRef, children, ...rest }) {
  const ref = useRef(null);
  const { ready } = useLoader();
  const token = useSectionToken();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ready || !ref.current) return undefined;
    if (token > 0) setShown(false);
    let io;
    const start = () => {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => setShown(e.isIntersecting)),
        { threshold: 0.15 },
      );
      io.observe(ref.current);
    };
    const timer = setTimeout(start, token > 0 ? 60 : 0);
    return () => {
      clearTimeout(timer);
      io?.disconnect();
    };
  }, [ready, token]);

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      if (typeof innerRef === 'function') innerRef(node);
      else if (innerRef) innerRef.current = node;
    },
    [innerRef],
  );

  const mergedStyle = delay != null ? { ...style, '--dl': `${delay}s` } : style;
  const classes = `${className} rv${shown ? ' in' : ''}`.trim();

  return (
    <Tag ref={setRefs} className={classes} style={mergedStyle} {...rest}>
      {typeof children === 'function' ? children(shown) : children}
    </Tag>
  );
}
