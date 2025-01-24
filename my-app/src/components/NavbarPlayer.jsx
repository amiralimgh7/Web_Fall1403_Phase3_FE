import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavbarPlayer() {
  return (
    <div className="navbar-container">
      {/* لوگو/عنوان */}
      <Link className="navbar-logo" to="/player">
        <span className="material-icons">sports_esports</span>
        سوال‌پیچ (بازیکن)
      </Link>

      {/* لینک‌ها */}
      <div className="navbar-links">
        <Link to="/player/questions">
          <span className="material-icons">help</span>
          سوالات
        </Link>
        <Link to="/player/leaderboard">
          <span className="material-icons">emoji_events</span>
          امتیازات
        </Link>
        <Link to="/feed">
          <span className="material-icons">rss_feed</span>
          فید
        </Link>
        <Link to="/player/profile">
          <span className="material-icons">account_circle</span>
          پروفایل
        </Link>
        <Link to="/login">
          <span className="material-icons">logout</span>
          خروج
        </Link>
      </div>
    </div>
  );
}

export default NavbarPlayer;
