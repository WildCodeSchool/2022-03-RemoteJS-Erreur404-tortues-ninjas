import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultatPizza from "./pages/ResultatPizza";
import RechercheFilm from "./pages/RechercheFilm";
import ResultatFilm from "./pages/ResultatFilm";
import Footer from "./components/Footer";
import PopupRetourAccueil from "./pages/PopupRetourAccueil";
import Welcome from "./pages/Welcome";
import Page404 from "./pages/Page404";
import { ContextProvider } from "./contexts/Context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/:choice" element={<RechercheFilm />} />
            <Route path="/resultat/film" element={<ResultatFilm />} />
            <Route path="/resultat/pizza" element={<ResultatPizza />} />
            <Route path="/popup/home" element={<PopupRetourAccueil />} />
            <Route path="/return" element={<PopupRetourAccueil />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
