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

  useEffect(() => {
    if (ready) return undefined;
    let cleanup;
    const show = setTimeout(() => {
      root.classList.add('ldo');
      setReady(true);
      cleanup = setTimeout(() => {
        root.classList.remove('ldg', 'ldo');
        setGone(true);
      }, 1000);
    }, 3000);
    return () => {
      clearTimeout(show);
      clearTimeout(cleanup);
    };
  }, [ready, root]);

  return <LoaderContext.Provider value={{ ready, gone }}>{children}</LoaderContext.Provider>;
}

export const useLoader = () => useContext(LoaderContext);
