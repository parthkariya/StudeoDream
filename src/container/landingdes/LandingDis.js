import React from "react";
import "./landingdis.css";
import { images } from "../../utils";

const LandingDis = () => {
  return (
    <div className="main_wrapp">
      <div className="base_wrapp landing_dis_wrapp">
        <div className="ldis_first_wrapp">
          <div className="ldis_first_part1">
            <img
              src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="ldis_first_part1-img"
            />
          </div>
          <div className="ldis_first_part2">
            <div className="landing_viewcoll_wrapp">
              <img
                src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                className="landing_viewcoll_wrapp-img"
              />
              <button className="link_btn">View Collection</button>
            </div>
            <div className="landing_contact_wrapp">
              <img
                src="https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="landing_contact_wrapp-img"
              />
              <button className="link_btn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="ldis_secound_wrapp">
          <div className="ldis_secound_wrapp-part1">
            <img src={images.camara_icon} className="cmra-img" />
            <p className="weding_photography_text">
              WEDDING PHOTOGRAPHY AND FILMS THAT CAPTURE YOUR STORY THE WAY YOU
              LIVED IT...
            </p>
          </div>
          <div className="ldis_secound_wrapp-part2">
            <p className="ldis_secound_wrapp-part2-text">
              Raw, real, and emotions - these are just a few words we capture.
              When it comes to the approach, we deliver the image through the
              lens of love. It’s all about the inbetween moments, which make it
              invaluable. Our job is to catch every second, so you and your
              loved ones can just live in the moment, the way you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDis;
