import React from "react";
import "./App.css";
import { StyledWrapper } from "./Style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UnknownRoute } from "./components/UnknownRoute";
import { default as MathGame } from "./components/Games/MathGame";
import { default as MemoryGame } from "./components/Games/MemoryGame";
import { default as TypingGame } from "./components/Games/TypingGame";
import CleanThePlanet from "./components/Games/CleanThePlanet/CleanThePlanet";
function App() {
  return (
    <StyledWrapper>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/joc-matematica`} element={<MathGame />} />
          <Route path={`/joc-memorie`} element={<MemoryGame id="memoryGame" />} />
          <Route path={`/joc-scris`} element={<TypingGame />} />
          <Route path={`/joc-curatenie`} element={<CleanThePlanet />} />
          <Route path="*" element={<UnknownRoute />} />
        </Routes>
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
