import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../utils";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav_main_wrapp">
      <div className="nav_base_wrapp">
        <img src={images.logo} alt="studio dream logo" className="nav_icon" />
        <div className="nav_links_wrapp">
          <Link to={"/"} className="nav_single_link">
            Home
          </Link>
          <Link to={"/photography"} className="nav_single_link">
            photography
          </Link>
          <Link to={"/commercial"} className="nav_single_link">
            commercial
          </Link>
          <Link to={"/videography"} className="nav_single_link">
            films
          </Link>
          <Link to={"/aboutus"} className="nav_single_link">
            about
          </Link>
          <Link to={"/contactus"} className="nav_single_link">
            contact
          </Link>

          <Link to={""} className="nav_single_link">
            <img
              src={images.insta}
              alt="insta logo"
              className="nav_insta_logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
