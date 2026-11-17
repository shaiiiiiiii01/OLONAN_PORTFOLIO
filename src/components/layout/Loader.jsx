import { useLoader } from '../../context/LoaderContext';
import { SITE } from '../../data/site';

/** First-visit logo pulse. Visibility is controlled by the `ldg` class set in index.html. */
export default function Loader() {
  const { gone } = useLoader();
  if (gone) return null;
  return (
    <div id="loader" aria-hidden="true">
      <span className="lg">{SITE.initials}</span>
    </div>
  );
}
