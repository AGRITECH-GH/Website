import { NavLink } from "react-router-dom";
import logoMark from "../assets/branding/agritech-mark-transparent.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoMark} alt="" className="footer-logo-img" />
            <span>AgriTech Ghana</span>
          </div>
          <p>
            Building digital infrastructure for trusted, climate-smart agriculture across Ghana.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://www.facebook.com/search/top?q=Agritech%20Ghana" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
            <a href="https://www.instagram.com/agritech.gh" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://www.threads.net/@agritech.gh" target="_blank" rel="noreferrer" aria-label="Threads">Threads</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/training">Training</NavLink>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+233537333237">0537333237</a>
          <a href="https://www.facebook.com/search/top?q=Agritech%20Ghana" target="_blank" rel="noreferrer">Facebook: Agritech Ghana</a>
          <a href="https://www.instagram.com/agritech.gh" target="_blank" rel="noreferrer">Instagram: agritech.gh</a>
          <a href="https://www.threads.net/@agritech.gh" target="_blank" rel="noreferrer">Threads: agritech.gh</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AgriTech Ghana. All rights reserved.</span>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
