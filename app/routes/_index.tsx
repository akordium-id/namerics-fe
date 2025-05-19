import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Namerics - Username Generator" },
    { name: "description", content: "Generate unique usernames inspired by Indonesian regional languages and local wisdom" },
  ];
};

export default function Index() {
  return (
    <main>
      <section className="hero-section container">
        <div className="hero-content">
          <div className="uniquely-indonesian">Uniquely Indonesian</div>
          <h1>
            Create Meaningful <span>Usernames</span> from Indonesian Heritage
          </h1>
          <p className="hero-description">
            Generate unique usernames inspired by Indonesian regional languages and
            local wisdom. Stand out with culturally rich identities for all your online
            platforms.
          </p>
          <div className="btn-group">
            <Link to="/generator" className="btn-primary">
              Try Generator Now <span>→</span>
            </Link>
            <Link to="/features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>
        <div className="hero-examples">
          <div className="username-example">
            <div className="username-example-title">SuryaWulan_23</div>
            <div className="username-category">Javanese • Nature</div>
          </div>
          <div className="username-example">
            <div className="username-example-title">SILIWANGI_BATIK</div>
            <div className="username-category">Sundanese • Arts</div>
          </div>
          <div className="username-example">
            <div className="username-example-title">barong rangda</div>
            <div className="username-category">Balinese • Mythology</div>
          </div>
        </div>
      </section>
    </main>
  );
}