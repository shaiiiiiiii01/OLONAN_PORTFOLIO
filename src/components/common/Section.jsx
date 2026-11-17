import { useContext } from 'react';
import { ReplayContext, SectionContext } from '../../context/SectionContext';

/** <section> that hands its replay token to every Reveal/Typewriter inside it. */
export default function Section({ id, className, children }) {
  const tokens = useContext(ReplayContext);
  return (
    <SectionContext.Provider value={tokens[id] || 0}>
      <section id={id} className={className}>
        {children}
      </section>
    </SectionContext.Provider>
  );
}
