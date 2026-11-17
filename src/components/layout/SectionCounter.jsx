import { SECTION_IDS } from '../../data/site';

/** Fixed "01 / 07" indicator. */
export default function SectionCounter({ active }) {
  const n = SECTION_IDS.indexOf(active) + 1;
  return (
    <div id="cn" aria-hidden="true">
      {`0${n} / 0${SECTION_IDS.length}`}
    </div>
  );
}
