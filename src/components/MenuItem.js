import React from "react";

function MenuItem({ image, name, price, description }) {
  return (
    <div className="menuItem">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h1>{name}</h1>
      <p>{price} Lek</p>
      <h6> {description}</h6>
    </div>
  );
}

export default MenuItem;
