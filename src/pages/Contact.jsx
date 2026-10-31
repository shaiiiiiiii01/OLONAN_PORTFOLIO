import { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "../components/Icons.jsx";

const contactInfo = [
  { icon: <MailIcon size={26} />, text: "joyceolonan@gmail.com", href: "mailto:joyceolonan@gmail.com" },
  { icon: <LinkedinIcon />, text: "linkedin.com/in/joyce-olonan", href: "https://linkedin.com/in/joyce-olonan" },
  { icon: <GithubIcon />, text: "github.com/joyce-olonan", href: "https://github.com/joyce-olonan" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Update whichever field the user is typing in.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  }

  // Frontend only: no backend yet, so we just show a confirmation and clear the form.
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="container">
      <section className="contact">
        <div>
          <SectionHeading label="GET IN TOUCH" title="Contact Me" />
          <p className="lead">
            Feel free to reach out if you have any questions, collaborations, or just want to say hi!
          </p>
          <ul className="contact-list">
            {contactInfo.map((c) => (
              <li key={c.text}>
                <span className="contact-icon">{c.icon}</span>
                <a href={c.href}>{c.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Type your message here..." value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn btn-primary">Send Message <ArrowIcon /></button>
          {sent && <p className="form-note">Thank you! Your message has been noted (demo only, no backend yet).</p>}
        </form>
      </section>
    </div>
  );
}
