import React from "react";
import "../styles/Premium.css";
import PremiumType from "../components/PremiumType";
import { Button } from "@mui/material";

function Premium() {
  return (
    <div className="premium">
      <h1>Upgrade to Premium</h1>
      <pre>
        Enjoy an enhanced experience, exclusive creator tools,
        <br />
        top-tier verification and security.
      </pre>
      <PremiumType
        type="Basic"
        price="215.87"
        description="2,590.48 billed annually"
      />
      <PremiumType
        type="Premium"
        price="566.67"
        description="6,800 billed annually"
      />
      <PremiumType
        type="Premium+"
        price="2,861.67"
        description="34,340 billed annually"
      />
      <Button>Subscribe</Button>
    </div>
  );
}

export default Premium;
