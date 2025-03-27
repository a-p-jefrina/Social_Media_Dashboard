import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import PostBoxIcon from "./PostBoxIcon";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "../styles/PostBox.css";

function PostBox({ setTweets }) {
  const [postMessage, setPostMessage] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  const postTweet = (e) => {
    e.preventDefault();

    if (!postMessage.trim()) {
      alert("Tweet cannot be empty!!!");
      return;
    }

    const newTweet = {
      id: new Date().getTime(),
      displayName: "Jefrina",
      username: "Jeffy123",
      verified: false,
      text: postMessage,
      avatar:
        "https://pbs.twimg.com/profile_images/1904088248600940544/O1lY3hic_400x400.jpg",
      image: postUrl,
      likes: 0,
      retweet: 0,
      category: "Home",
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
    setPostMessage("");
    setPostUrl("");
    toggleInput();
  };

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1904088248600940544/O1lY3hic_400x400.jpg"
            alt="avatar"
          />
          <input
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        {showInput && (
          <input
            onChange={(e) => setPostUrl(e.target.value)}
            value={postUrl}
            type="text"
            placeholder="Enter the Url"
          />
        )}
        <div className="postBox__icons">
          <PostBoxIcon Icon={ImageOutlinedIcon} onClick={toggleInput} />
          <PostBoxIcon Icon={GifBoxOutlinedIcon} onClick={toggleInput} />
          <PostBoxIcon Icon={PollOutlinedIcon} />
          <PostBoxIcon Icon={EmojiEmotionsOutlinedIcon} />
          <PostBoxIcon Icon={WorkHistoryOutlinedIcon} />
          <PostBoxIcon Icon={LocationOnOutlinedIcon} />
          <Button onClick={postTweet} type="submit" className="postBox__post">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PostBox;
