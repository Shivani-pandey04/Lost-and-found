import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        <h1 className="logo">Lost & Found Portal</h1>

        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/search" className={location.pathname === "/search" ? "active" : ""}>Search</Link></li>
            <li><Link to="/report-lost" className={location.pathname === "/report-lost" ? "active" : ""}>Lost Item</Link></li>
            <li><Link to="/report-found" className={location.pathname === "/report-found" ? "active" : ""}>Found Item</Link></li>
            <li><Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
