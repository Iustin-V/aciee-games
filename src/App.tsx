import React from "react";
import "./App.css";
import { StyledWrapper } from "./Style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UnknownRoute } from "./components/UnknownRoute";
import { Navbar } from "./components/Navbar";
// import * as MathGame from "./components/Games/MathGame";
import Game from "./components/Games/MathGame";
function App() {
  return (
    <StyledWrapper>
      <BrowserRouter>
        {/*<div ref={topRef} />*/}
        <Navbar />
        {/*<ScrollToTop />*/}
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/math`} element={<Game />} />
          {/*{navbarLinks}*/}

          <Route path="*" element={<UnknownRoute />} />
        </Routes>
        {/*<ToTopButton topRef={topRef} isTopButton={isTopButton} />*/}
        {/*<Footer />*/}
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
