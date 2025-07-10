import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/" className="brand">Jupiter</Link>
      </div>

      <div className="center">
        <Link to= "/" className="nav-links">Home</Link>
        <Link to= "/products"  className="nav-links">Products</Link>
      </div>

      <div className="right-side">
        <input type="search" placeholder="Search..." />
        <Link to= "/login" className="login"><FontAwesomeIcon icon= {faUser} /></Link>
      </div>
    </div>
  );
};

export default Navbar;
