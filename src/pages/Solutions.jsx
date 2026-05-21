import Icon from "../components/Icon";

const serviceCards = [
  { icon: "leaf", title: "Crop Production Support", text: "Soil insight, field advisory, irrigation planning, and crop health monitoring for stronger yields." },
  { icon: "market", title: "Input Sourcing", text: "Access to certified seed, fertilizer, crop protection, and quality-approved input partners." },
  { icon: "logistics", title: "Mechanization", text: "Coordinated access to tractors, harvesters, and equipment service providers." },
  { icon: "contract", title: "Post-Harvest Support", text: "Drying, cold chain, packaging, grading, and aggregation support to reduce losses." },
];

const livestockCards = [
  { icon: "shield", title: "Veterinary Support", text: "Preventive care schedules, disease alerts, and verified veterinary partner access." },
  { icon: "leaf", title: "Feed & Nutrition", text: "Feed planning, sourcing assistance, and productivity-focused nutrition support." },
  { icon: "analytics", title: "Production Cycles", text: "Better planning from breeding or brooding to sales and buyer fulfilment." },
];

function Solutions() {
  return (
    <>
      <section className="page-hero light-hero page-offset">
        <div className="page-hero-copy">
          <span className="badge">Services Ecosystem</span>
          <h1>Complete Farm <span>Empowerment</span></h1>
          <p>From production support to buyer access, AgriConnect provides a practical service suite for climate-smart agribusiness growth.</p>
          <div className="action-row">
            <a href="#pillars" className="btn btn-primary">Explore Services</a>
            <a href="/contact" className="btn btn-outline">Talk to Sales</a>
          </div>
        </div>
        <div className="hero-image-card">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80" alt="Farmer using tablet" />
          <div className="stat-badge"><strong>45%</strong><span>Average yield improvement target</span></div>
        </div>
      </section>

      <section className="section" id="pillars">
        <div className="section-center">
          <span className="eyebrow">Service Pillars</span>
          <h2>Tools for the full agricultural cycle</h2>
          <p>Support services designed to help farmers and agribusiness partners plan, produce, aggregate, and sell with confidence.</p>
        </div>
        <div className="card-grid four compact-cards">
          {serviceCards.map((card) => <article key={card.title}><Icon name={card.icon} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-split-header light-copy">
          <div><span className="eyebrow light">Livestock Services</span><h2>Livestock and veterinary excellence</h2></div>
          <p>Field support for animal health, feed optimization, buyer readiness, and production planning.</p>
        </div>
        <div className="card-grid three dark-cards">
          {livestockCards.map((card) => <article key={card.title}><Icon name={card.icon} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <section className="section market-academy">
        <div className="wide-card">
          <span className="eyebrow">Market Access</span>
          <h2>Global market linkages</h2>
          <p>Connect with institutional buyers, processors, domestic retailers, and export-readiness partners through a structured aggregation and fulfilment layer.</p>
          <a href="/marketplace" className="text-link">Explore marketplace <Icon name="arrow" size={16} /></a>
        </div>
        <div className="wide-card accent-card">
          <span className="eyebrow">Farmer Academy</span>
          <h2>Practical learning for resilient farms</h2>
          <p>Training modules in soil health, climate-smart production, record keeping, market timing, and financial literacy.</p>
          <a href="/training" className="text-link">View training <Icon name="arrow" size={16} /></a>
        </div>
      </section>
    </>
  );
}

export default Solutions;
