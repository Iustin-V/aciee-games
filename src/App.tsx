import React from "react";
import "./App.css";
import { StyledWrapper } from "./Style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UnknownRoute } from "./components/UnknownRoute";

function App() {
  return (
    <StyledWrapper>
      <BrowserRouter>
        {/*<div ref={topRef} />*/}
        {/*<Navbar />*/}
        {/*<ScrollToTop />*/}
        <Routes>
          <Route path={`/`} element={<Home />} />
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
