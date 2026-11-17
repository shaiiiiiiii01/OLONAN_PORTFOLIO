import Section from '../common/Section';
import Reveal from '../common/Reveal';
import SectionTag from '../common/SectionTag';

export default function About() {
  return (
    <Section id="about">
      <div className="wrap">
        <SectionTag>02 · About</SectionTag>
        <div className="two">
          <Reveal as="h2">Building with <em>purpose</em>, learning with every project.</Reveal>
          <Reveal delay={0.15}>
            <p>
              I’m an aspiring full-stack developer who enjoys turning ideas into functional websites and systems. As a BSIT student, I’m continuously learning new technologies and applying my knowledge through school and personal projects.
            </p>
            <p>
              I value clean code, simple designs, and user-friendly experiences. I enjoy exploring new ideas, solving problems, and finding ways to improve my work. My goal is to become a skilled full-stack developer who can create complete, reliable, and useful web applications.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
