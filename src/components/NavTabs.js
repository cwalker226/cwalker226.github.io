import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-light bg-light navBg">
          <Link className="navbar-brand" to="/">
            <span className="h1 name">Corey Walker</span>
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link
                    to="/"
                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                    >About</Link>
            </li>
            <li className="nav-item">
                <Link 
                    to="/portfolio" 
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="./resources/Corey_Walker_resume6.pdf" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="https://github.com/cwalker226" className="nav-link"><i className="fab fa-github"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.linkedin.com/in/coreywalker/" className="nav-link"><i className="fab fa-linkedin-in"></i></Link>
            </li>
          </ul>
        </nav>
    );
}

export default NavTabs;