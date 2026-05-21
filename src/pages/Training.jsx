import Icon from "../components/Icon";

const programmes = [
  { icon: "book", title: "Climate-smart farming", text: "Practical modules on soil health, crop selection, water management, and field resilience." },
  { icon: "analytics", title: "Business planning", text: "Financial literacy, record keeping, pricing, and investment-readiness training." },
  { icon: "people", title: "Community workshops", text: "Agent-led learning sessions designed for farmer groups and rural communities." },
  { icon: "globe", title: "Market readiness", text: "Quality standards, aggregation rules, buyer communication, and fulfilment discipline." },
];

function Training() {
  return (
    <>
      <section className="page-hero light-hero page-offset training-hero">
        <div className="page-hero-copy"><span className="badge">Farmer Academy</span><h1>Training that turns knowledge into <span>productivity</span></h1><p>Structured learning, mentorship, and advisory support for farmers, agents, and agribusiness operators.</p><div className="action-row"><a className="btn btn-primary" href="/contact">Join a Cohort</a><a className="btn btn-outline" href="/faq">View FAQ</a></div></div>
        <div className="hero-image-card"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" alt="Training workshop" /></div>
      </section>
      <section className="section muted-section"><div className="section-center"><span className="eyebrow">Learning Tracks</span><h2>Designed for real field conditions</h2><p>Content is practical, modular, and designed to support both digital users and agent-assisted communities.</p></div><div className="card-grid four compact-cards">{programmes.map((p) => <article key={p.title}><Icon name={p.icon} /><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section>
      <section className="section split-feature"><div><span className="eyebrow">Mentorship</span><h2>Guidance beyond the classroom</h2><p>Participants receive access to agronomists, business coaches, and field agents who help translate knowledge into measurable improvements.</p></div><div className="timeline"><div><strong>01</strong><span>Assess farmer needs</span></div><div><strong>02</strong><span>Assign learning path</span></div><div><strong>03</strong><span>Track practice adoption</span></div><div><strong>04</strong><span>Connect to markets</span></div></div></section>
    </>
  );
}

export default Training;
