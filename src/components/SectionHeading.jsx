import Sparkle from "./Sparkle.jsx";

// Small pink label + big title + sparkle, reused on About, Projects and Contact.
export default function SectionHeading({ label, title }) {
  return (
    <>
      <p className="eyebrow">{label}</p>
      <h1 className="page-title">
        {title} <Sparkle size={22} className="title-sparkle" />
      </h1>
    </>
  );
}
