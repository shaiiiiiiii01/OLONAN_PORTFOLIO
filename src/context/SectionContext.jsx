import { createContext, useContext } from 'react';

/** Per-section replay tokens: bumping a token replays that section's entrance animations. */
export const ReplayContext = createContext({});

/** The replay token of the section a component lives in (0 = never replayed). */
export const SectionContext = createContext(0);

export const useSectionToken = () => useContext(SectionContext);
