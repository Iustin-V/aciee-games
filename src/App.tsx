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
import { Footer } from "./components/Games/Footer";
function App() {
  return (
    <StyledWrapper>
      {window.innerWidth < 1100 ? (
        <>
          <div className="bg" />
          <div className="bg bg2" />
          <div className="bg bg3" />
          <div className="width-error">
            Ne pare rau, rezolutia dispozitivului dvs. este sub minimul necesar.
            Accesati site-ul de pe un PC.
          </div>
          <Footer />
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/joc-matematica`} element={<MathGame />} />
            <Route
              path={`/joc-memorie`}
              element={<MemoryGame id="memoryGame" />}
            />
            <Route path={`/joc-scris`} element={<TypingGame />} />
            <Route path={`/joc-curatenie`} element={<CleanThePlanet />} />
            <Route path="*" element={<UnknownRoute />} />
          </Routes>
        </BrowserRouter>
      )}
    </StyledWrapper>
  );
}

export default App;
