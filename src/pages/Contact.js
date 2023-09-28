import React from "react";
import "../styles/Contact.css";
import Margarita from "../assets/Margarita.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(${Margarita})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="cotnact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name...." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email...." type="email" />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message....."
            name="message"
            required
          ></textarea>

          <button type="Submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
