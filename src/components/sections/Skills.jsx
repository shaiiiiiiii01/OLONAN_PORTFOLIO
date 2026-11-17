import { useEffect, useRef, useState } from 'react';
import Section from '../common/Section';
import SectionTag from '../common/SectionTag';
import SectionTitle from '../common/SectionTitle';
import { skills } from '../../data/skills';
import { prefersReducedMotion } from '../../utils/motion';

const GLYPHS = [
  { text: '{ }', style: { top: 90, left: '4%', '--t': '5s' } },
  { text: '</>', style: { top: '46%', right: '3%', '--t': '6s' } },
  { text: '0xf', style: { bottom: 50, left: '6%', '--t': '7s' } },
];

function SkillTile({ skill, hidden, delay }) {
  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <li className={`tl2${hidden ? ' hid' : ''}`} style={{ '--td': delay }} onPointerMove={onPointerMove}>
      <svg
        viewBox={skill.viewBox || '0 0 40 40'}
        fill={skill.fill}
        aria-hidden="true"
        focusable="false"
        dangerouslySetInnerHTML={{ __html: skill.body }}
      />
      <span>{skill.name}</span>
    </li>
  );
}

/**
 * When the grid is 20% visible every skill pops in 100ms after the previous one and the
 * counter ticks up. Leaving the section resets it so it replays.
 */
export default function Skills() {
  const total = skills.length;
  const grid = useRef(null);
  const [revealed, setRevealed] = useState(prefersReducedMotion);
  const [count, setCount] = useState(prefersReducedMotion ? total : 0);

  useEffect(() => {
    if (prefersReducedMotion || !grid.current) return undefined;
    let start;
    let ticker;
    let inView = false;
    const reset = () => {
      clearTimeout(start);
      clearInterval(ticker);
      setRevealed(false);
      setCount(0);
    };
    const play = () => {
      let n = 0;
      setRevealed(true);
      clearInterval(ticker);
      ticker = setInterval(() => {
        setCount(++n);
        if (n >= total) clearInterval(ticker);
      }, 100);
    };
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[entries.length - 1];
        if (e.intersectionRatio >= 0.2) {
          if (inView) return;
          inView = true;
          clearTimeout(start);
          start = setTimeout(play, 150);
        } else if (!e.isIntersecting) {
          inView = false;
          reset();
        }
      },
      { threshold: [0, 0.2] },
    );
    io.observe(grid.current);
    return () => {
      io.disconnect();
      clearTimeout(start);
      clearInterval(ticker);
    };
  }, [total]);

  return (
    <Section id="toolbox">
      {GLYPHS.map((g) => (
        <span key={g.text} className="gl" style={g.style} aria-hidden="true">{g.text}</span>
      ))}
      <div className="wrap">
        <SectionTag>03 · Skills</SectionTag>
        <span className="cnt" aria-hidden="true">{`${String(count).padStart(2, '0')} / ${total}`}</span>
        <SectionTitle delay={0.1}>The <em>skills</em> I’m building.</SectionTitle>
        <ul className="tools" id="tools" ref={grid} style={{ listStyle: 'none', padding: 0 }}>
          {skills.map((s, i) => (
            <SkillTile key={s.name} skill={s} hidden={!revealed} delay={revealed ? `${i * 0.1}s` : '0s'} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
