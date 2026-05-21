import Icon from "../components/Icon";

const team = [
  { name: "Kwame Asante", role: "Managing Director", bio: "Leads strategy, institutional partnerships, and regional agribusiness expansion.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
  { name: "Dr. Abena Mensah", role: "Head of Crop Production", bio: "Agronomy specialist focused on climate-resilient farming and field advisory systems.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80" },
  { name: "Kofi Baidoo", role: "Head of Livestock", bio: "Guides livestock productivity, animal health workflows, and feed optimization programmes.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80" },
  { name: "Ama Serwaa", role: "Training Manager", bio: "Builds farmer education, agent coaching, and community adoption programmes.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" },
  { name: "Yaw Boakye", role: "Operations Manager", bio: "Oversees aggregation, logistics coordination, and fulfilment reliability.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80" },
  { name: "Esi Owusu", role: "Finance & Admin", bio: "Manages financial controls, partner reporting, and operational governance.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80" },
];

function Team() {
  return (
    <>
      <section className="simple-hero page-offset dark-section"><span className="badge">Meet the Team</span><h1>Guided by experts, rooted in innovation.</h1><p>Our leadership combines agricultural experience, engineering discipline, and field execution capability.</p></section>
      <section className="section muted-section"><div className="team-grid">{team.map((m) => <article className="team-card" key={m.name}><img src={m.img} alt={m.name} /><h3>{m.name}</h3><span>{m.role}</span><p>{m.bio}</p><div className="team-links"><a href="#profile" aria-label={`${m.name} profile`}><Icon name="people" size={16} /></a><a href="#contact" aria-label={`${m.name} contact`}><Icon name="mail" size={16} /></a></div></article>)}</div></section>
      <section className="section split-feature"><div><span className="eyebrow">Careers</span><h2>Want to make an impact on the ground?</h2><p>We are always looking for agronomists, engineers, field agents, trainers, and community builders.</p><a href="/contact" className="btn btn-primary">Contact Us</a></div><div className="stats-grid mini"><div><strong>40+</strong><span>Experts</span></div><div><strong>15k</strong><span>Farmers</span></div><div><strong>95%</strong><span>Retention</span></div><div><strong>3</strong><span>Regions</span></div></div></section>
    </>
  );
}

export default Team;
