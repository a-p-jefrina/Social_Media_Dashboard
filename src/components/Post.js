import { Avatar } from "@mui/material";
import React, { forwardRef, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import "../styles/Post.css";

const Post = forwardRef(
  (
    {
      displayName,
      username,
      verified,
      text,
      image,
      avatar,
      likes: initialLikes,
      retweet: initialRetweet,
      timestamp,
    },
    ref
  ) => {
    const [likes, setLikes] = useState(initialLikes);
    const [retweet, setRetweet] = useState(initialRetweet);

    const handleLike = () => {
      const newLikes = likes + 1;
      setLikes(newLikes);
    };

    const handleRetweet = () => {
      const newRetweet = retweet + 1;
      setRetweet(newRetweet);
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__content">
          <div className="post__header">
            <h3>{displayName} </h3>
            {verified && <VerifiedIcon />}{" "}
            <span>
              @{username} . {timestamp}
            </span>
          </div>
          <div className="post__text">
            <pre>{text}</pre>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <div className="post__retweet" onClick={handleRetweet}>
              <RepeatIcon fontSize="small" />
              <h4>{retweet}</h4>
            </div>

            <di className="post__favourite" onClick={handleLike}>
              <FavoriteBorderIcon fontSize="small" />
              <h4>{likes}</h4>
            </di>
            <GraphicEqIcon fontSize="small" />
            <BookmarkBorderIcon fontSize="small" />
            <IosShareIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
