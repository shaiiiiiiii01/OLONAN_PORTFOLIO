import Reveal from './Reveal';

/** Section <h2>; wrap the highlighted word(s) in <em>. */
export default function SectionTitle({ children, delay }) {
  return (
    <Reveal as="h2" delay={delay}>
      {children}
    </Reveal>
  );
}
