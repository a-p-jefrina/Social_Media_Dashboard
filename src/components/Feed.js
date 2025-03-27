import React, { useEffect, useState } from "react";
import PostBox from "./PostBox";
import Post from "./Post";
import "../styles/Feed.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function Feed() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://json-server-w8m3.onrender.com/tweets")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json(); // <- FIXED
      })
      .then((data) => {
        setTweets(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="feed__loading">
        <AutorenewIcon />
      </div>
    );
  }

  if (error) {
    return (
      <div className="feed__error">
        <ErrorOutlineIcon />
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* PostBox */}
      <PostBox setTweets={setTweets} />
      {/* Posts */}
      {tweets.map((tweet) => (
        <Post
          key={tweet.id}
          displayName={tweet.displayName}
          username={tweet.username}
          verified={tweet.verified}
          text={tweet.text}
          avatar={tweet.avatar}
          image={tweet.image}
          likes={tweet.likes}
          retweet={tweet.retweet}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
