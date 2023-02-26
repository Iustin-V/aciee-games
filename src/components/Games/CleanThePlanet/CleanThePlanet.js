import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import DialogueCard from "./components/DialogueCard";
import "./CleanThePlanet.css";
import { Footer } from "../Footer";

const CleanThePlanet = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [gameState, setGameState] = useState("start");

  function gameStart() {
    let btnSound = new Audio("./sfx/large-btn.mp3");
    btnSound.play();
    setTime(20);
    setScore(0);
    setGameState("game");
  }

  function incrementScore() {
    setScore(score + 1);
  }

  useEffect(() => {
    if (gameState === "game") {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      if (time === 0) {
        setGameState("end");
      }
      return () => clearTimeout(timer);
    }
  }, [gameState, time]);

  function getMainContent() {
    switch (gameState) {
      case "start":
        return (
          <DialogueCard
            title={"Bine ai venit!"}
            content={"Hai sa curatam impreuna planeta de gunoaie."}
            button={"Sa incepem"}
            buttonClick={gameStart}
          />
        );
      case "game":
        return <Game setScore={incrementScore} />;
      case "end":
        return (
          <DialogueCard
            title={"Felicitari !"}
            content={`Scorul tau: ${score}`}
            button={"Incearca din nou!"}
            buttonClick={gameStart}
          />
        );
      default:
        return;
    }
  }

  return (
    <div className="game-page">
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <div className={"gamePage"}>
        <h1 className="title">Sa &nbsp;curatam&nbsp;Planeta&nbsp;!</h1>
        {getMainContent()}
        <p
          className="main-p"
          style={
            gameState === "game" ? { display: "block" } : { display: "none" }
          }
        >
          Scorul&nbsp;tau&nbsp;este&nbsp;:&nbsp;{score} | Timp
          ramas&nbsp;:&nbsp;
          {time}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CleanThePlanet;
