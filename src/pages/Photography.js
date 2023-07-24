import React from "react";
import { Footer, Navbar } from "../components";
import {
  Commercialimage,
  Wedphotographykindwords,
  Wedphotoshootfirst,
} from "../container";

const Photography = () => {
  return (
    <>
      <Navbar />
      <Wedphotoshootfirst />
      <Commercialimage />
      <Wedphotographykindwords />
      <Footer />
    </>
  );
};

export default Photography;
