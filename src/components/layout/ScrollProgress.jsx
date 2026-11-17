import { useEffect, useRef } from 'react';

/** Thin pink reading-progress bar at the top of the screen. */
export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      if (bar.current) bar.current.style.width = `${(window.scrollY / (h.scrollHeight - window.innerHeight || 1)) * 100}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return <div id="bar" ref={bar} />;
}
