import { useEffect, useState } from 'react';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import SectionTag from '../common/SectionTag';
import SectionTitle from '../common/SectionTitle';
import { currentlyLearning, terminalLines } from '../../data/now';
import { prefersReducedMotion } from '../../utils/motion';

const TOTAL_CHARS = terminalLines.reduce((n, l) => n + l.text.length, 0);

/** Types the terminal lines one character at a time (22ms) while `active`; clears when not. */
function Terminal({ active }) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!active) {
      setTyped(0);
      return undefined;
    }
    if (prefersReducedMotion) {
      setTyped(TOTAL_CHARS);
      return undefined;
    }
    let n = 0;
    const id = setInterval(() => {
      setTyped(++n);
      if (n >= TOTAL_CHARS) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [active]);

  let left = typed;
  const spans = [];
  terminalLines.forEach((line, i) => {
    if (left <= 0) return;
    spans.push(<span key={i} className={line.cls}>{line.text.slice(0, left)}</span>);
    left -= line.text.length;
  });

  return (
    <div className="tc" id="tm" aria-label="Terminal showing what Joyce is currently learning">
      {spans}
      {active && typed >= TOTAL_CHARS && !prefersReducedMotion && <span className="caret" />}
    </div>
  );
}

export default function Now() {
  return (
    <Section id="now">
      <div className="wrap">
        <SectionTag>06 · Now</SectionTag>
        <SectionTitle delay={0.1}>What I’m <em>up to</em> right now.</SectionTitle>
        <div className="nowg">
          <Reveal className="term">
            {(shown) => (
              <>
                <div className="tb"><i /><i /><i /></div>
                <Terminal active={shown} />
              </>
            )}
          </Reveal>
          <Reveal className="card" delay={0.15}>
            <h3>Currently learning</h3>
            <ul>
              {currentlyLearning.map((item) => (
                <li key={item.name}>{item.name} <span>{item.status}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
