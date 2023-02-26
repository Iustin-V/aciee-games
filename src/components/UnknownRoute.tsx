import React from "react";
import {Footer} from "./Games/Footer";

export const UnknownRoute = () => {
  return (
    <div className="unknownRoute">
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <p> Ne pare rau, pagina cautata nu exista. :(</p>
      <Footer/>
    </div>
  );
};
