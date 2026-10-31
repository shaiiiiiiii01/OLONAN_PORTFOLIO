import { Link } from "react-router-dom";
import Sparkle from "../components/Sparkle.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import { ArrowIcon, CodeIcon, DatabaseIcon, PencilIcon } from "../components/Icons.jsx";
import heroImage from "../assets/hero.svg";

const features = [
  { icon: <CodeIcon />, title: "Web Development", text: "Building responsive and user-friendly websites." },
  { icon: <DatabaseIcon />, title: "Database Management", text: "Organizing and managing data efficiently." },
  { icon: <PencilIcon />, title: "Creative Design", text: "Turning ideas into simple and clean visuals." },
];

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">HELLO, I'M</p>
          <h1 className="hero-name">Joyce Valerie Olonan</h1>
          <p className="hero-subtitle">BSIT Student &nbsp;|&nbsp; Aspiring Web Developer</p>
          <p className="lead">
            I'm a 3rd year BSIT student who loves building simple and meaningful digital solutions.
            Welcome to my portfolio!
          </p>
          <div className="button-row">
            <Link to="/projects" className="btn btn-primary">View My Projects <ArrowIcon /></Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <span className="hero-arc" aria-hidden="true" />
          <Sparkle size={22} className="hero-sparkle" />
          <img src={heroImage} alt="Laptop and flowers in soft pink" className="hero-image" />
        </div>
      </section>

      <section className="features">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </section>
    </div>
  );
}
