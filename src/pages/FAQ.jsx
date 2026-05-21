import { useState } from "react";
import Icon from "../components/Icon";

const groups = [
  { id: "agritech", icon: "analytics", label: "Agritech Services", questions: ["How does the soil analysis workflow operate?", "Can farmers use the platform without a smartphone?", "How are field recommendations generated?"] },
  { id: "market", icon: "market", label: "Market Access", questions: ["How are buyers verified?", "Does AgriConnect support aggregation?", "Can farmers negotiate prices?"] },
  { id: "training", icon: "book", label: "Farmer Training", questions: ["Are training modules online or field-based?", "Can agents run community workshops?", "Is certification available?"] },
  { id: "security", icon: "shield", label: "Trust & Security", questions: ["How are payments protected?", "Who can access farmer data?", "How are disputes handled?"] },
];

function FaqItem({ question }) {
  const [open, setOpen] = useState(false);
  return (
    <button className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)} type="button">
      <span>{question}</span>
      <Icon name={open ? "check" : "arrow"} size={18} />
      {open && <p>Our team provides a structured workflow for this area. Contact support for configuration specific to your organization or farmer network.</p>}
    </button>
  );
}

function FAQ() {
  const [active, setActive] = useState(groups[0].id);
  const activeGroup = groups.find((g) => g.id === active) || groups[0];
  return (
    <>
      <section className="simple-hero page-offset faq-page-hero"><span className="badge">Support Center</span><h1>Help and advisory support.</h1><p>Everything you need to understand AgriConnect services, market access, training, and operational support.</p><div className="search-box"><Icon name="search" /><input placeholder="Search for answers" /></div></section>
      <section className="section faq-layout"><aside className="faq-sidebar"><span className="eyebrow">Topics</span>{groups.map((g) => <button key={g.id} className={active === g.id ? "active" : ""} type="button" onClick={() => setActive(g.id)}><Icon name={g.icon} size={18} />{g.label}</button>)}</aside><div className="faq-main"><h2><Icon name={activeGroup.icon} />{activeGroup.label}</h2>{activeGroup.questions.map((q) => <FaqItem key={q} question={q} />)}</div></section>
      <section className="section cta-section"><div className="cta-panel"><h2>Still have questions?</h2><p>Our advisory team can help you understand the right solution for your farmers, buyers, or agribusiness programme.</p><a href="/contact" className="btn btn-primary">Contact Support</a></div></section>
    </>
  );
}

export default FAQ;
