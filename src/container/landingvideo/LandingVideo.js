import React, { useRef, useState } from "react";
import { images } from "../../utils";
import "./landingvideo.css";

const LandingVideo = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      //   setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  return (
    <>
      <div className="vid_wrapp">
        <video
          id="video1"
          src={images.freevid}
          ref={videoRef}
          className="landing_vid"
        />

        {playing ? (
          <img
            onClick={() => videoHandler("pause")}
            className="controlsIconpp"
            alt=""
            src={images.pushvid}
          />
        ) : (
          <img
            onClick={() => videoHandler("play")}
            className="controlsIconpp"
            alt=""
            src={images.play}
          />
        )}
      </div>
    </>
  );
};

export default LandingVideo;
