import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import clinicImg from "../assets/project-clinic.svg";
import lcrmsImg from "../assets/project-lcrms.svg";
import vaultImg from "../assets/project-vault.svg";

const projects = [
  { image: clinicImg, title: "GC Clinic System", description: "A web-based platform for scheduling medical appointments and reducing waiting time.", link: "#" },
  { image: lcrmsImg, title: "LCRMS", description: "An offline case records management system for Barangay Old Cabalan.", link: "#" },
  { image: vaultImg, title: "Scholar Vault", description: "A research management portal for Gordon College - College of Computer Studies.", link: "#" },
];

export default function Projects() {
  return (
    <div className="container">
      <section className="page-section">
        <SectionHeading label="MY PROJECTS" title="Some of My Work" />
        <p className="lead">
          Here are a few sample projects I've worked on. These are just placeholders for now —
          more details will be added later!
        </p>
        <div className="card-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
