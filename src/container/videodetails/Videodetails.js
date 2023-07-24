import React from "react";
import Wedphotographykindwords from "../Wedphotographykindwords/Wedphotographykindwords";
import "./Videodetails.css";
const Videodetails = () => {
  return (
    <>
      <div className="main_wrapp">
        <div className="base_wrapp video-details-flex-main">
          <div className="video-details-flex-inner">
            <div className="videos-details-flex-part-first">
              {/* <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
                </video> */}
            </div>

            <div className="videos-details-flex-part-sec">
              <div className="videos-details-flex-part-sec-inner-txt">
                <p className="txt_big videography-video-txtt">
                  FEATURED VIDEO:
                </p>
                <p className="h1 videography-video-txt-head">PRE WEDDING</p>
                <p className="txt_big videography-video-txt">
                  A wedding adventure with a party vibe and epic cinematic
                  visuals
                </p>
              </div>
            </div>
          </div>

          <div className="video-details-flex-inner">
            <div className="videos-details-flex-part-sec">
              <div className="videos-details-flex-part-sec-inner-txt">
                <p className="txt_big videography-video-txtt">
                  FEATURED VIDEO:
                </p>
                <p className="h1 videography-video-txt-head">COMMERCIAL</p>
                <p className="txt_big videography-video-txt">
                  we are not only capturing raw video footage, but we think
                  creatively about the various scenes and how they should come
                  together in a complete story.
                </p>
              </div>
            </div>
            <div className="videos-details-flex-part-first"> </div>
          </div>

          <div className="video-details-flex-inner">
            <div className="videos-details-flex-part-first">
              {/* <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
                </video> */}
            </div>

            <div className="videos-details-flex-part-sec">
              <div className="videos-details-flex-part-sec-inner-txt">
                <p className="txt_big videography-video-txtt">
                  FEATURED VIDEO:
                </p>
                <p className="h1 videography-video-txt-head">INTERIOR</p>
                <p className="txt_big videography-video-txt">
                  capturing a healthier and more aesthetically pleasing
                  environment for the people using the living or working space.
                </p>
              </div>
            </div>
          </div>

          <div className="video-details-flex-inner">
            <div className="videos-details-flex-part-sec">
              <div className="videos-details-flex-part-sec-inner-txt">
                <p className="txt_big videography-video-txtt">
                  FEATURED VIDEO:
                </p>
                <p className="h1 videography-video-txt-head">WEDDING</p>
                <p className="txt_big videography-video-txt">
                  we are not only capturing raw video footage, but we think
                  creatively about the various scenes and how they should come
                  together in a complete story.
                </p>
              </div>
            </div>
            <div className="videos-details-flex-part-first"> </div>
          </div>

          <div className="video-details-flex-inner">
            <div className="videos-details-flex-part-first">
              {/* <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
                </video> */}
            </div>

            <div className="videos-details-flex-part-sec">
              <div className="videos-details-flex-part-sec-inner-txt">
                <p className="txt_big videography-video-txtt">
                  FEATURED VIDEO:
                </p>
                <p className="h1 videography-video-txt-head">CORPORATE</p>
                <p className="txt_big videography-video-txt">
                  capturing a healthier and more aesthetically pleasing
                  environment for the people using the living or working space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wedphotographykindwords />
    </>
  );
};

export default Videodetails;
