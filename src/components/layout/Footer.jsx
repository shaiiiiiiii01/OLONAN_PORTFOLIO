import Reveal from '../common/Reveal';
import { SITE } from '../../data/site';

export default function Footer() {
  return (
    <footer>
      <Reveal className="wrap">
        <span>© {SITE.year} {SITE.name}</span>
        <span>Designed and built with care</span>
        <span>{SITE.version}</span>
      </Reveal>
    </footer>
  );
}
