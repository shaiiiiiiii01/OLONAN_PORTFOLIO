import SectionHeading from "../components/SectionHeading.jsx";
import profileImage from "../assets/profile.svg";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "MySQL", "PHP",
  "Git & GitHub", "Word / PPT", "Basic Networking", "Graphic Design",
];

export default function About() {
  return (
    <div className="container">
      <section className="about">
        <div>
          <SectionHeading label="ABOUT ME" title="Hi, I'm Joyce Valerie Olonan" />
          <p className="lead">
            I'm a 3rd year BSIT student at Gordon College. I enjoy learning new technologies,
            solving problems, and creating simple but useful web applications. I'm always excited
            to improve my skills and take on new challenges.
          </p>
        </div>
        <img src={profileImage} alt="Pink desk with flowers and a notebook" className="profile-image" />
      </section>

      <section className="skills">
        <div className="skills-heading">
          <h2>Skills</h2>
          <span className="skills-line" />
        </div>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-pill">{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
