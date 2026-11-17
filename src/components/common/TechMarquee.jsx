import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { marqueeSkills } from '../../data/now';

/**
 * Endless right-to-left word ticker. Repeats the word list until each track is wider than the
 * viewport, then sets its speed (80px/s) and a time-based offset so both tickers stay in step.
 */
export default function TechMarquee({ className = '' }) {
  const tracks = useRef([]);
  const [copies, setCopies] = useState(2);
  const [tick, setTick] = useState(0);

  useLayoutEffect(() => {
    const first = tracks.current[0];
    if (!first) return;
    if (first.scrollWidth < window.innerWidth * 1.1 && copies < 12) {
      setCopies((c) => c + 1);
      return;
    }
    const width = first.scrollWidth;
    if (!width) return;
    const now = Date.now() / 1e3;
    tracks.current.forEach((t) => {
      if (!t) return;
      t.style.setProperty('--md', `${width / 80}s`);
      t.style.animationDelay = `-${now % (width / 80)}s`;
    });
  }, [copies, tick]);

  useEffect(() => {
    let timer;
    const refit = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setCopies(2);
        setTick((t) => t + 1);
      }, 150);
    };
    window.addEventListener('resize', refit);
    document.fonts?.ready.then(() => setTick((t) => t + 1));
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', refit);
    };
  }, []);

  const renderTrack = (n) => (
    <div className="trk" ref={(el) => (tracks.current[n] = el)}>
      {Array.from({ length: copies }, (_, c) =>
        marqueeSkills.map((word) => (
          <Fragment key={`${c}-${word}`}>
            <span>{word}</span>
            <i>✦</i>
          </Fragment>
        )),
      )}
    </div>
  );

  return (
    <Reveal className={`mqs ${className}`.trim()} aria-hidden="true">
      {renderTrack(0)}
      {renderTrack(1)}
    </Reveal>
  );
}
