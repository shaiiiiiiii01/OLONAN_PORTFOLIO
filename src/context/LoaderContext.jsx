import { createContext, useContext, useEffect, useState } from 'react';

const LoaderContext = createContext({ ready: true, gone: true });

/**
 * First-visit loading screen. index.html adds the `ldg` class when the session is new.
 * After 3s the page fades in (`ldo`), `ready` flips so entrance animations can start,
 * and the loader is removed.
 */
export function LoaderProvider({ children }) {
  const root = document.documentElement;
  const [ready, setReady] = useState(() => !root.classList.contains('ldg'));
  const [gone, setGone] = useState(() => !root.classList.contains('ldg'));

  // Step 1: after 3s fade the page in and let entrance animations start.
  useEffect(() => {
    if (ready) return undefined;
    const timer = setTimeout(() => {
      root.classList.add('ldo');
      setReady(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [ready, root]);

  // Step 2 (its own effect so step 1's cleanup can't cancel it): 1s later remove the loader classes
  // that lock scrolling, and drop the loader.
  useEffect(() => {
    if (!ready || gone) return undefined;
    const timer = setTimeout(() => {
      root.classList.remove('ldg', 'ldo');
      setGone(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ready, gone, root]);

  return <LoaderContext.Provider value={{ ready, gone }}>{children}</LoaderContext.Provider>;
}

export const useLoader = () => useContext(LoaderContext);
