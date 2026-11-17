import { useEffect, useRef } from 'react';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import SectionTag from '../common/SectionTag';
import SectionTitle from '../common/SectionTitle';
import { journey } from '../../data/journey';

export default function Journey() {
  const line = useRef(null);

  // Fills the timeline's pink line as the section scrolls through the viewport.
  useEffect(() => {
    const update = () => {
      const el = line.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.65 - r.top) / r.height));
      el.style.setProperty('--p', p);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <Section id="journey">
      <div className="wrap">
        <SectionTag>05 · Learning journey</SectionTag>
        <SectionTitle delay={0.1}>How I <em>got here</em>.</SectionTitle>
        <div className="tl" id="tl" ref={line}>
          {journey.map((j, i) => (
            <Reveal key={j.step} className="it" delay={Math.min(i * 0.1, 0.5)}>
              <span className="n">{j.step}</span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
