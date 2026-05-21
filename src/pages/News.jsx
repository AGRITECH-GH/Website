import { useState } from "react";
import Icon from "../components/Icon";

const categories = [
  { icon: "analytics", label: "Trends", desc: "Market shifts and emerging agricultural demand." },
  { icon: "water", label: "Sustainability", desc: "Climate-smart practices for resilient production." },
  { icon: "leaf", label: "Production", desc: "Practical insight for crops and livestock." },
  { icon: "people", label: "Farmer Stories", desc: "Success stories from the AgriTech Ghana network." },
];

const articles = [
  { tag: "Precision Farming", title: "Satellite imaging and field intelligence for smallholder resilience", text: "How better visibility helps farmers prevent avoidable production risk.", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80" },
  { tag: "Market Access", title: "Why aggregation is the missing layer in African agribusiness", text: "Digital trade works best when farmers, agents, buyers, and logistics partners operate as a connected system.", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" },
  { tag: "Climate", title: "Building a farm business around climate-smart practices", text: "The agribusiness case for soil, water, and waste reduction.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80" },
];

function News() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <>
      <section className="page-hero image-hero page-offset">
        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=80" alt="Agricultural field" />
        <div className="hero-overlay" />
        <div className="page-hero-copy floating-copy"><span className="badge">Insights</span><h1>The rise of <span>regenerative technology</span></h1><p>Ideas, field lessons, and agribusiness perspectives from the AgriTech Ghana ecosystem.</p></div>
      </section>
      <section className="section muted-section"><div className="section-split-header"><div><span className="eyebrow">Categories</span><h2>Explore insight areas</h2></div><p>Short, practical notes for agribusiness leaders, farmers, partners, and product teams.</p></div><div className="card-grid four compact-cards">{categories.map((c) => <article key={c.label}><Icon name={c.icon} /><h3>{c.label}</h3><p>{c.desc}</p></article>)}</div></section>
      <section className="section news-layout"><div><h2 className="section-title">Latest insights</h2><div className="article-list">{articles.map((a) => <article className="article-card" key={a.title}><img src={a.img} alt={a.title} /><div><span className="eyebrow">{a.tag}</span><h3>{a.title}</h3><p>{a.text}</p><a href="#read" className="text-link">Read more <Icon name="arrow" size={16} /></a></div></article>)}</div></div><aside className="newsletter-card"><h3>Get weekly insights</h3><p>Receive a concise briefing on agritech, market access, and climate-smart agriculture.</p>{subscribed ? <strong>Subscription confirmed</strong> : <><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" /><button className="btn btn-primary" type="button" onClick={() => email && setSubscribed(true)}>Subscribe</button></>}</aside></section>
    </>
  );
}

export default News;
