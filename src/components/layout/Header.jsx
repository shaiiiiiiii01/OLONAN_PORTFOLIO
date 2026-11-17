import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '../../data/site';

/** Shared header: logo, desktop nav, and the mobile "Menu" dropdown. */
export default function Header({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header>
      <div className="np">
        <a href="#home" className={`logo${active === 'home' ? ' on' : ''}`} onClick={() => go('home')}>
          <span className="lg">{SITE.initials}</span>
          <span>
            {SITE.shortName}
            <span className="us">_</span>
          </span>
        </a>
        <button
          id="menu"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
        <nav id="nav" className={open ? 'open' : undefined} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${link.button ? 'btn' : 'l'}${active === link.id ? ' on' : ''}`}
              onClick={() => go(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
