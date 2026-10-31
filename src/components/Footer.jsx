import { Link } from "react-router-dom";
import Sparkle from "./Sparkle.jsx";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="brand">
          <Sparkle size={20} />
          <span>JOYCE</span>
        </Link>
        <p className="copyright">© 2026 Joyce Valerie Olonan. All rights reserved.</p>
        <div className="social">
          <a href="https://github.com/joyce-olonan" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://linkedin.com/in/joyce-olonan" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="mailto:joyceolonan@gmail.com" aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
