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
              to="/features" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/faq" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}