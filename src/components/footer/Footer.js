import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main_wrapp">
      <div className="base_wrapp footer-flex">
        <div className="footer-iconbox">
          <a href="https://www.instagram.com/accounts/login/" target="_blank">
            <AiOutlineInstagram className="footer-icon" />
          </a>

          <a href="https://www.facebook.com/login/" target="_blank">
            <FaFacebook className="footer-icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube className="footer-icon" />
          </a>
        </div>
        <p className="txt_big footer-rights-txt">
          ©2022 Studio Dream | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
