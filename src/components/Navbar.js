import React, { useState } from "react";
import Pizza from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      {/*divide the navbar in 2parts: leftside and rightside: */}

      <div className="leftside" id={openLinks ? "open" : "close"}>
        <img src={Pizza} className="logo" />

        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="rightside">
        <div className="nav-buttons">
          <Link to="/">Home </Link>
          <Link to="/menu">Menu </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <button>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
