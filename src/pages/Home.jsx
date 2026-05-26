import Icon from "../components/Icon";
import { useSEO } from "../hooks/useSEO";

const stakeholderCards = [
  {
    icon: "leaf",
    title: "For Farmers",
    text: "Access advisory, buyer visibility, traceability support, and climate-smart tools that improve productivity and income resilience.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "network",
    title: "For Agents",
    text: "Onboard farmers, validate produce, coordinate field activity, and support trusted transactions across agricultural communities.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "market",
    title: "For Buyers",
    text: "Source verified produce, access transparent supply information, and engage reliable farmer networks with confidence.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
];

const featureItems = [
  { icon: "analytics", title: "Smart Analytics", text: "Field, market, and transaction insights that improve agricultural decision-making." },
  { icon: "globe", title: "Regional Reach", text: "A connected network for farmers, agents, buyers, processors, and partners." },
  { icon: "water", title: "Sustainable Growth", text: "Tools that support better use of inputs, water, logistics, and market timing." },
];

const chainSteps = [
  { icon: "leaf", number: "01", title: "Sustainable Harvest", text: "Verified practices and improved field visibility at source." },
  { icon: "contract", number: "02", title: "Digital Tagging", text: "Produce identity and traceability from farm to buyer." },
  { icon: "logistics", number: "03", title: "Smart Logistics", text: "Better aggregation, routing, and fulfilment coordination." },
  { icon: "market", number: "04", title: "Fair Trade Market", text: "Transparent pricing and trusted buyer access." },
];

function Home() {
  useSEO({
    title: "AgriTech Ghana — Smarter Farming, Better Futures",
    description: "Connecting Ghana's farmers, agents and buyers through digital traceability, advisory and fair-trade tools."
  });

  return (
    <>
      <section className="hero-section home-hero">
        <div className="hero-media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85" alt="" fetchpriority="high" width="2200" height="1466" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content centered">
          <span className="badge">Sustainably Smart</span>
          <h1>The Future<br />of <span>Farming</span></h1>
          <p>Revolutionizing agriculture through smart technology and sustainable practices for a greener, more productive tomorrow.</p>
          <div className="action-row centered-actions">
            <a href="/signup" className="btn btn-primary">Get Started</a>
            <a href="/solutions" className="btn btn-light">View Platform Demo</a>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-split-header">
          <div>
            <span className="eyebrow">Our Ecosystem</span>
            <h2>Empowering every stakeholder.</h2>
          </div>
          <p>AgriTech Ghana creates a trusted loop between production, advisory, aggregation, finance, logistics, and market access.</p>
        </div>
        <div className="card-grid three">
          {stakeholderCards.map((card) => (
            <article className="image-card" key={card.title}>
              <img src={card.image} alt={card.title} loading="lazy" width="900" height="600" />
              <div className="image-card-body">
                <span className="icon-tile"><Icon name={card.icon} /></span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="/solutions" className="text-link">Explore Solutions <Icon name="arrow" size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tech-preview">
        <div className="copy-block">
          <span className="eyebrow">Our Technology</span>
          <h2>Bridging traditional wisdom with modern innovation.</h2>
          <div className="feature-stack">
            {featureItems.map((item) => (
              <div className="feature-row" key={item.title}>
                <span className="icon-tile"><Icon name={item.icon} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="visual-card image-visual">
          <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=85" alt="Farmer using smart agriculture technology" loading="lazy" width="1000" height="666" />
          <div className="floating-panel image-floating-panel">
            <strong>Smart Irrigation</strong>
            <span>Reduce water waste using timely field intelligence.</span>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-center">
          <span className="eyebrow">Process</span>
          <h2>The FarmBridge Supply Chain</h2>
          <p>An integrated flow from harvest to buyer, designed for trust, transparency, and climate-smart growth.</p>
        </div>
        <div className="process-grid">
          {chainSteps.map((step) => (
            <article className="process-card" key={step.title}>
              <span className="process-number">{step.number}</span>
              <Icon name={step.icon} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section impact-band">
        <div className="impact-copy">
          <span className="eyebrow light">Our Impact</span>
          <h2>Empowering 50,000+ smallholder farmers by 2026.</h2>
          <p>AgriTech Ghana connects farmers to markets, advisory services, traceability tools, and climate-smart support systems across Africa.</p>
          <a href="/impact" className="btn btn-primary">Read Impact Report</a>
        </div>
        <div className="photo-mosaic">
          <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=500&q=80" alt="Seedling" loading="lazy" width="500" height="750" />
          <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80" alt="Vegetables" loading="lazy" width="500" height="333" />
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80" alt="Farm field" loading="lazy" width="500" height="333" />
        </div>
      </section>

      <section className="section">
        <div className="section-center">
          <span className="eyebrow">Trust & Security</span>
          <h2>Enterprise-grade safeguards</h2>
          <p>Built with careful attention to transaction integrity, data privacy, fulfilment confidence, and trusted agribusiness operations.</p>
        </div>
        <div className="card-grid three compact-cards">
          <article><Icon name="shield" /><h3>Escrow Payments</h3><p>Secure transaction workflows that protect farmers and buyers.</p></article>
          <article><Icon name="contract" /><h3>Smart Contracts</h3><p>Structured agreements that reduce disputes and improve fulfilment.</p></article>
          <article><Icon name="analytics" /><h3>Data Privacy</h3><p>Operational records handled with clear privacy and access principles.</p></article>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-panel">
          <h2>Ready to cultivate your future?</h2>
          <p>Join forward-thinking agricultural professionals building more resilient food systems.</p>
          <div className="action-row centered-actions">
            <a href="/signup" className="btn btn-primary">Create Account</a>
            <a href="/contact" className="btn btn-dark-outline">Contact Sales</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
