import React from "react";
import "../styles/PostBoxIcon.css";

function PostBoxIcon({ Icon, onClick }) {
  return (
    <div className="postBoxIcon">
      <Icon onClick={onClick} />
    </div>
  );
}

export default PostBoxIcon;
