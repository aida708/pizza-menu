import React from "react";
import Place from "../assets/Place.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{
          backgroundImage: `url(${Place})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="aboutBottom">
        <h1>RRETH NESH</h1>
        <p>
          {" "}
          Aida's Pizza ju ofron picat më të shijshme të përgatitura nga
          mjeshtrat tanë me recetat më të mira italiane. Mundësi zgjedhjeje nga
          menuja e gjërë e pastave italiane të përgatitura dhe të servirura me
          mjeshtëri nga stafi ynë. Aida's Pizza ju mundëson ambjente relaksuese
          dhe të rehatshme. Ambjente të brendeshme dhe të jashtëme për grupe ose
          për organizime festash. Fëmijët do të gjejnë një perfekt dhe të
          përshtashëm për të kaluar momente me familjen e tyre.
        </p>
      </div>
    </div>
  );
}

export default About;
