import React from "react";
import "./Wedphotoshoot.css";
const Wedphotoshoot = () => {
  return (
    <div className="main_wrapp sec-padding-top">
      <div className="base_wrapp wedphotoshoot_first_flex">
        <div className="wedphotoshoot_first_imgbox"></div>
        <div className="wedphotoshoot_first_txtbox">
          <p className="txt_small mr-bottom">
            Photography > Wedding Photoshoot
          </p>
          <p className="h2 mr-bottom-small">Wedding Photoshoot</p>
          <p className="txt_big wedphotoshoot_first_txt">
            At studio dream, we believe in rituals and respect their importance.
            These are not mere ceremonies but events of value, substance and
            great importance that strengthens the bond of lifetime. Allowing to
            capture memories that lasts forever. Our clients are presented with
            bouquet of moments and emotions that becomes a treasure for a
            lifetime.{" "}
          </p>
          <a href="#" className="link_btn">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wedphotoshoot;
