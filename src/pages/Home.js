import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza-background.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ background: `url(${BannerImage})` }}
      >
        <h1>Aida's Pizzeria</h1>
        <p>Delicious Pizza</p>

        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
