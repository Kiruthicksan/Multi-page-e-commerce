import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaUser } from "react-icons/fa";

import "../Navbar/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="top-row">
        <div className="left-side">
          <Link to="/" className="brand">
            Jupiter
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`center ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/products" className="nav-links">
          Products
        </Link>
      </div>

      <div className={`right-side ${menuOpen ? "open" : ""}`}>
        <input type="search" placeholder="Search..." />
        <Link to="/login" className="login">
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
