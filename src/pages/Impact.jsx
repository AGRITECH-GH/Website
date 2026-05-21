import Icon from "../components/Icon";

const metrics = [
  { value: "50k+", label: "Farmers targeted" },
  { value: "120k", label: "Acres supported" },
  { value: "35%", label: "Loss reduction target" },
  { value: "12", label: "Hub regions" },
];

const impactPillars = [
  { icon: "water", title: "Climate resilience", text: "Support farmers with better planning, field intelligence, and adaptive production practices." },
  { icon: "market", title: "Income growth", text: "Improve market visibility, buyer access, aggregation, and pricing confidence." },
  { icon: "logistics", title: "Waste reduction", text: "Reduce post-harvest losses through faster matching, storage support, and coordinated movement." },
];

function Impact() {
  return (
    <>
      <section className="page-hero image-hero page-offset">
        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1800&q=80" alt="Young crops" />
        <div className="hero-overlay" />
        <div className="page-hero-copy floating-copy">
          <span className="badge">Sustainability First</span>
          <h1>Measuring <span>sustainable growth</span></h1>
          <p>Measuring farmer outcomes, climate-smart adoption, market access, and food-system resilience.</p>
        </div>
      </section>
      <section className="section">
        <div className="stats-grid">{metrics.map((m) => <div className="stat-card" key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>
      </section>
      <section className="section muted-section">
        <div className="section-center"><span className="eyebrow">Impact Pillars</span><h2>What AgriConnect improves</h2><p>Impact is designed around practical outcomes that matter to farmers, buyers, partners, and communities.</p></div>
        <div className="card-grid three compact-cards">{impactPillars.map((item) => <article key={item.title}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="section split-feature dark-section">
        <div><span className="eyebrow light">Climate Pledge</span><h2>Data-backed sustainability</h2><p>We track adoption of better agronomic practices, reduced losses, responsible input use, and market outcomes that strengthen farmer resilience.</p></div>
        <div className="report-card"><Icon name="chart" size={72} /><h3>Impact dashboard</h3><p>Production, income, post-harvest, and sustainability indicators in one reporting layer.</p></div>
      </section>
    </>
  );
}

export default Impact;
