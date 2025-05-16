import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About Namerics - Username Generator" },
    { name: "description", content: "Learn more about Namerics username generator" },
  ];
};

export default function About() {
  return (
    <div className="container">
      <header className="header">
        <h1>About Namerics</h1>
        <p>Learn more about our username generator</p>
      </header>

      <div className="card">
        <h2>What is Namerics?</h2>
        <p>
          Namerics is a powerful username generator designed to help you create unique, 
          creative, and memorable usernames for your online presence. Whether you need 
          a username for social media, gaming platforms, or any other online service, 
          Namerics has got you covered.
        </p>
        
        <h2 className="mt-4">How It Works</h2>
        <p>
          Our username generator uses a combination of adjectives, nouns, and optional 
          numbers to create unique username suggestions. You can customize the generation 
          process by specifying prefixes, suffixes, length requirements, and more.
        </p>
        
        <h2 className="mt-4">Features</h2>
        <ul>
          <li>Generate multiple username suggestions at once</li>
          <li>Customize username length</li>
          <li>Add custom prefixes and suffixes</li>
          <li>Include or exclude numbers</li>
          <li>One-click copy to clipboard</li>
        </ul>
        
        <div className="mt-4">
          <Link to="/" className="btn">Back to Generator</Link>
        </div>
      </div>
    </div>
  );
}