import React from "react";
import "../styles/Explore.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { TwitterTweetEmbed } from "react-twitter-embed";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__input">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="explore__subscribe">
        <h3>Subscribe to Premium</h3>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <Button>Subscribe</Button>
      </div>
      <div className="explore__container">
        <h3>What's happening</h3>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
      </div>
    </div>
  );
}

export default Explore;
