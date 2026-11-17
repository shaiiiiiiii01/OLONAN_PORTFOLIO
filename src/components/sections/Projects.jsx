import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import SectionTag from '../common/SectionTag';
import SectionTitle from '../common/SectionTitle';
import { projects } from '../../data/projects';
import useMediaQuery from '../../hooks/useMediaQuery';
import { prefersReducedMotion } from '../../utils/motion';

function ProjectCard({ project, index, total }) {
  return (
    <article className="pc">
      <div className="sh">
        <div className="pv">
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        </div>
      </div>
      <div className="pi">
        <span className="n">{`0${index + 1} / 0${total}`}</span>
        <h3 className={project.title.length > 26 ? 'long' : undefined}>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="acts">
          {project.links.map((l) => (
            <a
              key={l.label}
              className="lnk"
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${l.label}: ${project.title} (opens in a new tab)`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

const markInert = (el) => el && el.setAttribute('inert', '');
const PX_PER_SECOND = 55;

/**
 * Projects: an endless right-to-left marquee on tablet/desktop (pauses on hover/focus),
 * a swipe carousel with dots on phones (<720px), and a static list for reduced motion.
 */
export default function Projects() {
  const mobile = useMediaQuery('(max-width:719px)');
  const mode = mobile ? 'mob' : prefersReducedMotion ? '' : 'mq';
  const car = useRef(null);
  const track = useRef(null);
  const [current, setCurrent] = useState(0);

  const cards = (set) =>
    projects.map((p, i) => <ProjectCard key={`${set}-${p.title}`} project={p} index={i} total={projects.length} />);

  // Marquee speed: one loop = half the track width at 55px/s; start offset follows the clock.
  useLayoutEffect(() => {
    if (mode !== 'mq') return undefined;
    const setDuration = () => {
      const t = track.current;
      if (t) t.style.setProperty('--dur', `${t.scrollWidth / 2 / PX_PER_SECOND}s`);
    };
    setDuration();
    const t = track.current;
    if (t) t.style.animationDelay = `-${(Date.now() / 1e3) % (t.scrollWidth / 2 / PX_PER_SECOND)}s`;
    window.addEventListener('resize', setDuration);
    return () => window.removeEventListener('resize', setDuration);
  }, [mode]);

  const step = useCallback(() => {
    const c = car.current?.querySelectorAll('.pc');
    if (!c || c.length < 2) return car.current?.clientWidth || 1;
    return c[1].offsetLeft - c[0].offsetLeft;
  }, []);

  const onScroll = () => {
    const i = Math.min(projects.length - 1, Math.max(0, Math.round(car.current.scrollLeft / step())));
    setCurrent(i);
  };

  return (
    <Section id="work">
      <div className="wrap">
        <div className="head">
          <div>
            <SectionTag>04 · Selected work</SectionTag>
            <SectionTitle delay={0.1}>Recent <em>projects</em>.</SectionTitle>
          </div>
        </div>
      </div>
      <Reveal
        id="car"
        role="region"
        aria-label="Projects"
        className={mode}
        innerRef={car}
        tabIndex={mobile ? 0 : undefined}
        onScroll={mobile ? onScroll : undefined}
      >
        {mode === 'mq' ? (
          <div className="mqt" id="mqt" ref={track}>
            {cards('a')}
            <div className="cl" aria-hidden="true" ref={markInert}>
              {cards('b')}
              {cards('c')}
              {cards('d')}
            </div>
          </div>
        ) : (
          cards('a')
        )}
      </Reveal>
      {mobile && (
        <div className="dots">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              aria-label={`Show project ${i + 1}: ${p.title}`}
              aria-current={i === current}
              onClick={() => car.current.scrollTo({ left: i * step(), behavior: 'smooth' })}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
