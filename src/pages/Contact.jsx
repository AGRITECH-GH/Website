import { useState } from "react";
import Icon from "../components/Icon";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="contact-section page-offset">
        <div className="contact-copy">
          <span className="badge">Get in Touch</span>
          <h1>Let us grow <span>together.</span></h1>
          <p>Whether you are a farmer group, buyer, partner, or investor, our team is ready to help you scale agribusiness operations with modern technology.</p>
          {submitted ? (
            <div className="success-card"><Icon name="check" size={36} /><h3>Message received</h3><p>Thank you, {form.name || "there"}. We will respond to {form.email || "your email"} within 24 hours.</p><button className="btn btn-primary" type="button" onClick={() => setSubmitted(false)}>Send another message</button></div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row"><label>Full Name<input name="name" value={form.name} onChange={handleChange} placeholder="Kofi Mensah" required /></label><label>Email Address<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="kofi@example.com" required /></label></div>
              <label>Organisation<input name="organisation" value={form.organisation} onChange={handleChange} placeholder="Accra Valley Farms" /></label>
              <label>How can we help?<textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell us about your agricultural goals" required /></label>
              <button className="btn btn-primary full" type="submit">Send Message</button>
            </form>
          )}
        </div>
        <div className="contact-info-panel">
          <div className="map-panel"><div className="map-grid"><span></span><span></span><span></span><span></span></div><div className="map-pin"><Icon name="location" /></div></div>
          <div className="contact-cards"><article><Icon name="location" /><h3>Office Address</h3><p>Independence Avenue, Ridge, Accra, Ghana</p></article><article><Icon name="phone" /><h3>Direct Contact</h3><p><a href="tel:+233537333237">0537333237</a><br />hello@agritechghana.com</p></article></div>
        </div>
      </section>
      <section className="section muted-section"><div className="section-center"><span className="eyebrow">Presence</span><h2>Our global presence</h2><p>Bridging Ghanaian expertise with global agritech standards.</p></div><div className="stats-grid"><div><strong>500+</strong><span>Active farms</span></div><div><strong>10k</strong><span>Tons harvested</span></div><div><strong>12</strong><span>Hub regions</span></div><div><strong>98%</strong><span>Client success</span></div></div></section>
    </>
  );
}

export default Contact;
