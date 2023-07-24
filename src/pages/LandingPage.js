import React from "react";
import { Footer, Navbar } from "../components";
import { LandingDis, LandingMultiImg, LandingVideo } from "../container";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingVideo />
      <LandingDis />
      <LandingMultiImg />
      <Footer />
    </div>
  );
};

export default LandingPage;
