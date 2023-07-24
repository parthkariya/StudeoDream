import React from "react";
import { images } from "../../utils";
import "./landingmultiimg.css";

const LandingMultiImg = () => {
  return (
    <div className="main_wrapp">
      <div className="base_wrapp jc-sb">
        <div className="multi_images_sec1_wrapp">
          <div className="multi_images_sec1_inner">
            <img
              src={images.landing_last_sec_img_1}
              className="landing_last_sec_img"
            />
            <div className="multi_images_sec1_inner_2">
              <img
                src={images.gallery_img_4}
                className="landing_last_sec_img landing_last_sec_img_sec "
              />
            </div>
          </div>
        </div>
        <div className="multi_images_sec2_wrapp">
          <div className="multi_images_sec2_inner">
            <img
              src={images.landing_last_sec_img_3}
              className="landing_last_sec_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMultiImg;
