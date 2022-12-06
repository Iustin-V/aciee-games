import React, { useState, useEffect } from "react";
import hole from "../img/hole.webp";
import can from "../img/crushed.webp"
import bottle from "../img/bottle.webp"
import apple from "../img/apple.webp"
import fish from "../img/fish.webp"
import cleaned from "../img/giphy.gif"


function MoleHole({ molePopped, setScore }) {
  const [moleState, setMoleState] = useState(molePopped ? "mole" : "no-mole");

  useEffect(() => {
    setMoleState(molePopped ? "mole" : "no-mole");
  }, [molePopped]);

  const handleClick = () => {
    if (moleState === "mole") {
      setMoleState("escaped");
      setScore();
    }
  };



  return (
    <div className="grid-item" onClick={handleClick}>
      <img className="hole" src={hole} alt="" />
      <img
        className={`hole-content ${moleState === "mole" ? "mole" : ""}`}
        src={getMoleImage(moleState)}
        alt=""
      />
    </div>
  );
}

let images=[can,bottle,apple,fish]
const getRandomImage = () =>{
  let index=Math.floor(Math.random() * 4)
  console.log(index)
  return images[index]
}

let getMoleImage = (state) => {
  console.log(images)
  if (state === "escaped") {
    return cleaned;
  }
  if (state === "mole") {
    return getRandomImage();
  }
  return null;
};

export default MoleHole;
