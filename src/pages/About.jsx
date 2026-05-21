import Icon from "../components/Icon";

const values = [
  { icon: "analytics", title: "Innovation", text: "We build practical digital infrastructure for unique agricultural realities." },
  { icon: "water", title: "Sustainability", text: "Every solution is measured against resilience, responsible resource use, and long-term value." },
  { icon: "people", title: "Community", text: "We believe in shared growth across farmers, agents, buyers, and partners." },
];

function About() {
  return (
    <>
      <section className="page-hero image-hero page-offset">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80" alt="Farm landscape" />
        <div className="hero-overlay" />
        <div className="page-hero-copy floating-copy"><span className="badge">Our Story</span><h1>Built for <span>resilient agriculture</span></h1><p>We bridge field knowledge, market access, and modern technology to help African agribusinesses grow with confidence.</p></div>
      </section>
      <section className="section split-feature"><div className="feature-photo"><img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80" alt="Farmer in greenhouse" /></div><div><span className="eyebrow">Our Story</span><h2>Empowering African farmers through precision.</h2><p>Founded with a clear field problem in mind, AgriConnect supports farmers and agribusinesses with practical tools for better production, stronger records, trusted trade, and resilient growth.</p><p>We design around the realities of farmer communities, buyer needs, and partner reporting requirements.</p></div></section>
      <section className="section muted-section"><div className="section-center"><span className="eyebrow">Values</span><h2>Rooted in values, growing with technology.</h2></div><div className="card-grid three compact-cards">{values.map((v) => <article key={v.title}><Icon name={v.icon} /><h3>{v.title}</h3><p>{v.text}</p></article>)}</div></section>
      <section className="section dark-section split-feature"><div><span className="eyebrow light">Climate Pledge</span><h2>Responsible growth for stronger food systems.</h2><p>AgriConnect supports better field decisions, lower waste, stronger traceability, and more inclusive access to markets.</p></div><div className="check-list"><p><Icon name="check" />Climate-smart advisory</p><p><Icon name="check" />Post-harvest loss reduction</p><p><Icon name="check" />Farmer income visibility</p></div></section>
    </>
  );
}

export default About;
