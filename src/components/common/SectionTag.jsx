import Reveal from './Reveal';

/** Small mono label above a section heading, e.g. "02 · About". */
export default function SectionTag({ children, delay }) {
  return (
    <Reveal as="span" className="tag mono" delay={delay}>
      {children}
    </Reveal>
  );
}
