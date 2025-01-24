import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // همان فایل مشترک

function DesignerNavbar() {
  return (
    <div className="navbar-container">
      {/* لوگو/عنوان */}
      <Link className="navbar-logo" to="/designer">
        <span className="material-icons">design_services</span>
        سوال‌پیچ (طراح)
      </Link>

      {/* لینک‌ها */}
      <div className="navbar-links">
        <Link to="/designer/questions">
          <span className="material-icons">article</span>
          سوالات
        </Link>
        <Link to="/designer/categories">
          <span className="material-icons">folder</span>
          دسته‌بندی‌ها
        </Link>
        <Link to="/designer/profile">
          <span className="material-icons">person</span>
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

export default DesignerNavbar;
