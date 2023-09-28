import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

function Foooter() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <p>&copy; 2023 aidapizza.com </p>
      </div>
    </div>
  );
}

export default Foooter;
