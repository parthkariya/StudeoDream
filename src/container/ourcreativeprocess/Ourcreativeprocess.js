import React from "react";
import "./Ourcreativeprocess.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { images } from "../../utils";

const Ourcreativeprocess = () => {
  return (
    <>
      <div className="main_wrapp">
        <div className="base_wrapp aboutus-flex-column">
          <div className="h3 kind-words-heading">our creative process</div>
          <div className="ourcreativeprocess-inner-flex">
            <div className="creativeprocess-box">
              <p className="creativeprocess-box-heading creativeprocess-txt">
                INQUIRE
              </p>
              <p className="txt_big creativeprocess-txt">
                {" "}
                We listen brilliantly and get to know you, your clients, brand ,
                needs, expectations and goals.
              </p>
            </div>
            <div className="arrow-box">
              <img src={images.arrow} className="creativeprocess-arrow" />
            </div>
            <div className="creativeprocess-box">
              <p className="creativeprocess-box-heading creativeprocess-txt">
                INVENT
              </p>
              <p className="txt_big creativeprocess-txt">
                {" "}
                We define a clear strategy with inventive solutions, suited
                precisely for your needs.
              </p>
            </div>
            <div className="arrow-box">
              <img src={images.arrow} className="creativeprocess-arrow" />
            </div>
            <div className="creativeprocess-box">
              <p className="creativeprocess-box-heading creativeprocess-txt">
                DELIVER
              </p>
              <p className="txt_big creativeprocess-txt">
                {" "}
                We deliver your needs, we thrive for customer satisfaction. you
                are our priority.
              </p>
            </div>
            <div className="arrow-box">
              <img src={images.arrow} className="creativeprocess-arrow" />
            </div>
            <div className="creativeprocess-box">
              <p className="creativeprocess-box-heading creativeprocess-txt">
                IMPROVE
              </p>
              <p className="txt_big creativeprocess-txt">
                {" "}
                We open clear lines of communication for feedback from you, so
                that we keep getting better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourcreativeprocess;
