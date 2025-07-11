import React from "react";
import heroBanner from "../../assets/heroBanner.png";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img src={heroBanner} alt=""  loading="lazy"/>
        <div className="hero-content">
          <h2>Unleash Perfomance - Order Your PS5 Now</h2>
          <Link to = "/login"className="hero-ctn">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
