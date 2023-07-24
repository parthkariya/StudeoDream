import React from "react";
import { Footer, Navbar } from "../components";
import { Wedphotographykindwords, Wedphotoshootfirst } from "../container";
import Wedphotoshootgallery from "../container/wedphotoshootgallery/Wedphotoshootgallery";

const Weddingphotoshoot = () => {
  return (
    <>
      <Navbar />
      <Wedphotoshootfirst />
      <Wedphotoshootgallery />
      <Wedphotographykindwords />
      <Footer />
    </>
  );
};

export default Weddingphotoshoot;
