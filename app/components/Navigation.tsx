import { NavLink } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-brand">Namerics</div>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}