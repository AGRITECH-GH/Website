import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={[
        "site-navbar",
        isHome ? "site-navbar-home" : "",
        isScrolled || !isHome ? "site-navbar-scrolled" : "",
        isOpen ? "site-navbar-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <NavLink to="/" className="site-logo" aria-label="AgriConnect home">
        <span className="site-logo-mark">
          <Icon name="leaf" size={18} />
        </span>
        <span>AgriConnect</span>
      </NavLink>

      <nav className="site-nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "site-nav-link active" : "site-nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-nav-actions">
        <NavLink to="/login" className="site-login">
          Login
        </NavLink>
        <NavLink to="/signup" className="site-signup">
          Sign Up
        </NavLink>
      </div>

      <button
        type="button"
        className="mobile-menu-btn"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="mobile-menu-panel">
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "mobile-menu-link active" : "mobile-menu-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu-actions">
          <NavLink to="/login" className="mobile-login">
            Login
          </NavLink>
          <NavLink to="/signup" className="mobile-signup">
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;