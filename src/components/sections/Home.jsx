import Section from '../common/Section';
import Reveal from '../common/Reveal';
import Typewriter from '../common/Typewriter';
import CountUp from '../common/CountUp';
import TechMarquee from '../common/TechMarquee';
import { stats } from '../../data/stats';
import profile from '../../assets/images/profile.jpg';

const CHIPS = [
  { label: 'PHP', style: { top: '10%', left: -24, '--t': '4s' } },
  { label: 'Java', style: { top: '48%', right: -20, '--t': '5s' } },
  { label: 'Git', style: { bottom: '10%', left: -14, '--t': '6s' } },
];

function HeroText() {
  return (
    <div className="htxt" id="htxt">
      <div className="wrap">
        <Reveal className="meta" delay={0.05}>
          <span><b>status</b> Learning &amp; growing</span>
          <span><b>focus</b> Full-stack development</span>
        </Reveal>
        <Typewriter as="h1" step={38} delay={400} mode="ready">
          <span className="l1">Aspiring <em>full-stack</em> developer</span>{' '}
          <span className="l2">Building ideas into <em>functional</em> digital experiences.</span>
        </Typewriter>
        <Reveal as="p" className="hsub" delay={0.9}>
          Focused on web development, system building, and creating practical solutions through code.
        </Reveal>
        <Reveal as="p" className="sc mono" delay={1.2}>
          <i />scroll to meet me
        </Reveal>
      </div>
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="hpho" id="hpho">
      <div className="wrap hg">
        <Reveal className="pw">
          <div className="ph">
            <img src={profile} alt="Photo of Joyce Valerie Olonan" />
          </div>
          {CHIPS.map((c) => (
            <span key={c.label} className="chip" style={c.style}>{c.label}</span>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <span className="tag mono">01 · Hello</span>
          <Typewriter as="h2" step={52} delay={150} mode="view">
            {'Hi, I’m '}<em>Joyce</em>{' Valerie C. Olonan.'}
          </Typewriter>
          <p className="lede">
            I’m an aspiring full-stack developer who enjoys creating websites and systems. I work with{' '}
            <b>PHP</b>, <b>Java</b>, <b>HTML</b>, and <b>CSS</b>, and I continue to improve my skills by learning and building projects.
          </p>
          <div className="row">
            <a className="btn" href="#work">See my work</a>
            <a className="btn o" href="#contact">Get in touch</a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="wrap statsec">
      <Reveal>
        <span className="tag mono">By the numbers</span>
        <h2>Still learning, <em>measured</em> in projects &amp; <em>practice</em>.</h2>
      </Reveal>
      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="st" delay={i === 0 ? undefined : i * 0.1}>
            {(shown) => (
              <>
                {s.symbol ? <strong>{s.symbol}</strong> : <CountUp to={s.to} active={shown} />}
                <b>{s.label}</b>
                <span>{s.text}</span>
              </>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Section id="home">
      <div className="stage" id="stage">
        <div className="stick">
          <HeroText />
          <HeroPhoto />
        </div>
      </div>
      <Stats />
      <TechMarquee />
    </Section>
  );
}
