import { NavLink, Link } from "react-router-dom";
import Sparkle from "./Sparkle.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <Sparkle size={22} />
          <span>MY PORTFOLIO</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {/* NavLink adds the "active" class automatically for the current page */}
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className="nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
