import React from "react";
import "../styles/PremiumType.css";

function PremiumType({ type, price, description }) {
  return (
    <div className="premiumType">
      <input type="checkbox" />
      <h3>{type}</h3>
      <h2>₹ {price}/month</h2>
      <p>₹ {description}</p>
    </div>
  );
}

export default PremiumType;
