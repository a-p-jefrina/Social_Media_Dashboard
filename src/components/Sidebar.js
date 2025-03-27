import React from "react";
import "../styles/Sidebar.css";
import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { Button } from "@mui/material";
import SidebarIcon from "./SidebarIcon";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <div className="sidebar__xIcon">
        <XIcon />
      </div>
      {/* Other Icons */}
      <Link to="/" className="sidebar__link">
        <SidebarIcon Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/explore" className="sidebar__link">
        <SidebarIcon Icon={SearchIcon} text="Explore" />
      </Link>
      <SidebarIcon Icon={NotificationsOutlinedIcon} text="Notifications" />
      <SidebarIcon Icon={EmailOutlinedIcon} text="Messages" />
      <SidebarIcon Icon={PeopleOutlinedIcon} text="Communities" />
      <Link to="/premium" className="sidebar__link">
        <SidebarIcon Icon={VerifiedOutlinedIcon} text="Premium" />
      </Link>
      <SidebarIcon Icon={BoltOutlinedIcon} text="Verified Orgs" />
      <SidebarIcon Icon={PermIdentityOutlinedIcon} text="Profile" />
      <SidebarIcon Icon={MoreHorizRoundedIcon} text="More" />

      {/* Post Button */}
      <Button variant="outlined" className="sidebar__post" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
