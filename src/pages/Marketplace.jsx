import { useSEO } from "../hooks/useSEO";
import Icon from "../components/Icon";

const marketSegments = [
  { icon: "leaf", title: "Verified Farm Supply", text: "Structured produce listings tied to farmer profiles, location, season, and quality signals." },
  { icon: "market", title: "Buyer Matching", text: "Connect aggregators, processors, and institutional buyers to reliable supply pipelines." },
  { icon: "shield", title: "Transaction Trust", text: "Use verification, escrow-ready flows, and digital records to reduce disputes." },
  { icon: "logistics", title: "Fulfilment Coordination", text: "Support aggregation, transport planning, delivery updates, and fulfilment visibility." },
];

function Marketplace() {
  useSEO({
    title: "Marketplace — AgriTech Ghana",
    description: "Browse verified produce, connect with trusted farmer networks and source with confidence."
  });

  return (
    <>
      <section className="page-hero dark-hero page-offset">
        <div className="page-hero-copy">
          <span className="badge">Trusted Trade</span>
          <h1>A smarter marketplace for <span>agricultural supply</span></h1>
          <p>AgriTech Ghana helps farmers, agents, buyers, and logistics partners trade with better visibility, verification, and confidence.</p>
          <div className="action-row"><a href="/contact" className="btn btn-primary">Request Access</a><a href="/solutions" className="btn btn-light">View Services</a></div>
        </div>
        <div className="market-dashboard-card">
          <div className="dashboard-header"><span>Market Signal</span><strong>Maize</strong></div>
          <div className="dashboard-bars"><span></span><span></span><span></span><span></span><span></span></div>
          <div className="dashboard-row"><span>Verified sellers</span><strong>1,240</strong></div>
          <div className="dashboard-row"><span>Buyer requests</span><strong>328</strong></div>
          <div className="dashboard-row"><span>Fulfilment readiness</span><strong>86%</strong></div>
        </div>
      </section>
      <section className="section muted-section">
        <div className="section-center"><span className="eyebrow">Marketplace Layer</span><h2>Built for trust, not just listings</h2><p>Market access needs verification, pricing intelligence, logistics coordination, and transaction confidence.</p></div>
        <div className="card-grid four compact-cards">{marketSegments.map((item) => <article key={item.title}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="section split-feature">
        <div><span className="eyebrow">Value Chains</span><h2>Start focused. Scale intelligently.</h2><p>AgriTech Ghana can begin with priority value chains such as maize, cashew, cocoa, and livestock, then expand into additional commodities as partner networks mature.</p></div>
        <div className="value-chain-list"><span>Maize</span><span>Cashew</span><span>Cocoa</span><span>Livestock</span><span>Vegetables</span><span>Staple crops</span></div>
      </section>
    </>
  );
}

export default Marketplace;
