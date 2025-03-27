import React, { useState } from "react";
import "../styles/ExplorePage.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterMentionButton,
} from "react-twitter-embed";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { Button } from "@mui/material";

function ExplorePage() {
  const [isRowView, setIsRowView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasError, setHasError] = useState(false);

  const profiles = [
    { screenName: "elonmusk" },
    { screenName: "MrBeast" },
    { screenName: "SpaceX" },
    { screenName: "BillGates" },
  ];

  const filteredProfiles = profiles.filter((profile) =>
    profile.screenName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explorePage">
      {/* Search Bar */}
      <div className="explorePage__input">
        <SearchIcon />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          placeholder="Search"
        />
      </div>
      {/* News Column customization */}
      <div className="explorePage__news">
        <div className="explorePage__button">
          <h2>Posts for you</h2>
          <Button onClick={() => setIsRowView(true)}>
            <TableRowsIcon />
          </Button>
          <Button onClick={() => setIsRowView(false)}>
            <ViewColumnIcon />
          </Button>
        </div>
        <div className={isRowView ? "explorePage__row" : "explorePage__grid"}>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) =>
              !hasError ? (
                <TwitterTimelineEmbed
                  key={profile.screenName}
                  sourceType="profile"
                  screenName={profile.screenName}
                  options={{ height: 400 }}
                  theme="dark"
                  onError={() => setHasError(true)}
                />
              ) : (
                <TwitterMentionButton
                  key={profile.screenName}
                  sourceType="profile"
                  screenName={profile.screenName}
                  options={{ height: 400 }}
                  theme="dark"
                />
              )
            )
          ) : (
            <p>No Profiles Found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
