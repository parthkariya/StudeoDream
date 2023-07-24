import React from "react";
import { Footer, Navbar } from "../components";
import { Aboutuscontent, Ourcreativeprocess, OurVision } from "../container";
const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Aboutuscontent />
      <Ourcreativeprocess />
      <OurVision />
      <Footer />
    </>
  );
};

export default Aboutus;
