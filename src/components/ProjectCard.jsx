import { ArrowIcon } from "./Icons.jsx";

// One project card: image, title, description, and a link.
export default function ProjectCard({ image, title, description, link }) {
  return (
    <article className="card">
      <img src={image} alt={`${title} placeholder`} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="card-link">
        View Project <ArrowIcon />
      </a>
    </article>
  );
}
