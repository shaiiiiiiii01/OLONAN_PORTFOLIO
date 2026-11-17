import { useEffect, useState } from 'react';

/**
 * Hash routing: #home, #about, … scroll to a section. Any other hash is a "page that doesn't exist"
 * and shows the custom 404. Works on direct open and refresh because the hash is read on mount.
 */
export default function useHashRoute(validIds) {
  const check = () => {
    const hash = window.location.hash.slice(1);
    return Boolean(hash) && !validIds.includes(hash);
  };
  const [notFound, setNotFound] = useState(check);

  useEffect(() => {
    const onChange = () => {
      const missing = check();
      setNotFound(missing);
      if (missing) window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    onChange();
    return () => window.removeEventListener('hashchange', onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return notFound;
}
