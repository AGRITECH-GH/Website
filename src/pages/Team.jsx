import Icon from "../components/Icon";

import abigail from "../assets/team/abigail-thorpe.jpeg";
import abenaMensah from "../assets/team/abena-mensah.svg";
import kofiBaidoo from "../assets/team/esi-owusu.svg";
import stanley from "../assets/team/stanley.jpeg";
import justine from "../assets/team/justine-addo.jpeg";
import esiOwusu from "../assets/team/esi-owusu.svg";

const team = [
  {
    name: "Abigail Thorpe",
    role: "Managing Director",
    bio: "Leads strategy, institutional partnerships, and regional agribusiness expansion.",
    img: abigail,
    linkedin: "https://www.linkedin.com/in/abigail-thorpe-974ab037/",
    email: "abigail@agritechghana.com",
  },
  {
    name: "Dr. Abena Mensah",
    role: "Head of Crop Production",
    bio: "Agronomy specialist focused on climate-resilient farming and field advisory systems.",
    img: abenaMensah,
    linkedin: "https://www.linkedin.com/",
    email: "abena@agritechghana.com",
  },
  {
    name: "Kofi Baidoo",
    role: "Head of Livestock",
    bio: "Guides livestock productivity, animal health workflows, and feed optimization programmes.",
    img: kofiBaidoo,
    linkedin: "https://www.linkedin.com/",
    email: "kofi@agritechghana.com",
  },
  {
    name: "Stanley Boateng",
    role: "Developer",
    bio: "Builds farmer education, agent coaching, and community adoption programmes.",
    img: stanley,
    linkedin: "https://www.linkedin.com/in/stanley-boateng-/",
    email: "stanley@agritechghana.com",
  },
  {
    name: "Justine Addo",
    role: "Developer",
    bio: "Oversees aggregation, logistics coordination, and fulfilment reliability.",
    img: justine,
    linkedin: "https://www.linkedin.com/in/justineaddo/",
    email: "justine@agritechghana.com",
  },
  {
    name: "Esi Owusu",
    role: "Finance & Admin",
    bio: "Manages financial controls, partner reporting, and operational governance.",
    img: esiOwusu,
    linkedin: "https://www.linkedin.com/",
    email: "esi@agritechghana.com",
  },
];

function Team() {
  return (
    <>
      <section className="simple-hero page-offset dark-section">
        <span className="badge">Our Team</span>
        <h1>Guided by experts, rooted in innovation.</h1>
        <p>
          Meet the team driving climate-smart agriculture, digital innovation,
          and farmer-centred growth in Ghana.
        </p>
      </section>

      <section className="section muted-section">
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <img src={member.img} alt={member.name} />

              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.bio}</p>

              <div className="team-links">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${member.name} on LinkedIn`}
                  title={`View ${member.name} on LinkedIn`}
                >
                  <Icon name="people" size={16} />
                </a>

                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  title={member.email}
                >
                  <Icon name="mail" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-feature">
        <div>
          <span className="eyebrow">Careers</span>
          <h2>Want to make an impact on the ground?</h2>
          <p>
            We are always looking for agronomists, engineers, field agents,
            trainers, and community builders.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>

        <div className="stats-grid mini">
          <div>
            <strong>40+</strong>
            <span>Experts</span>
          </div>
          <div>
            <strong>15k</strong>
            <span>Farmers</span>
          </div>
          <div>
            <strong>95%</strong>
            <span>Retention</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Regions</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;