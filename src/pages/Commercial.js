import React from "react";
import { Footer, Navbar } from "../components";
import { Commercialimage, Ourclientele } from "../container";
import Wedphotoshoot from "../container/wedphotoshootfirst/Wedphotoshoot";

const Commercial = () => {
  return (
    <>
      <Navbar />
      <Wedphotoshoot />
      <Commercialimage />
      <Ourclientele />
      <Footer />
    </>
  );
};

export default Commercial;
