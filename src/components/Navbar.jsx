import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logoMark from "../assets/branding/agritech-mark-transparent.png";

const navItems = [
  { label: "About Us", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "Impact", path: "/impact" },
  { label: "Training", path: "/training" },
  { label: "Team", path: "/team" },
  { label: "News", path: "/news" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  const className = [
    "navbar",
    isHome ? "navbar-home" : "",
    scrolled || !isHome ? "navbar-scrolled" : "",
    open ? "navbar-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <NavLink to="/" className="brand" aria-label="AgriTech Ghana home">
        <img src={logoMark} alt="" className="brand-logo-img" />
        <span>AgriTech Ghana</span>
      </NavLink>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((state) => !state)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="mobile-menu-panel">
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
