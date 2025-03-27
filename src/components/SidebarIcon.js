import React from "react";
import "../styles/SidebarIcon.css";

function SidebarIcon({ Icon, text }) {
  return (
    <div className="sidebarIcon">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarIcon;
