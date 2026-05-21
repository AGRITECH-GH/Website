import { NavLink } from "react-router-dom";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo"><span className="brand-mark"><Icon name="leaf" size={18} /></span>AgriConnect</div>
          <p>
            Building the digital infrastructure for trusted, climate-smart agriculture across Africa.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#x">X</a>
            <a href="#linkedin">in</a>
            <a href="#mail"><Icon name="mail" size={16} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/training">Training</NavLink>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@agriconnect.io">hello@agriconnect.io</a>
          <a href="tel:+233245000000">+233 24 500 0000</a>
          <span>Independence Avenue, Ridge, Accra</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AgriConnect Technologies Ltd. All rights reserved.</span>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
