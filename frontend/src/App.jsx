import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./pages/Header";
import Home from "./pages/Home";
import RechercheFilm from "./pages/RechercheFilm";
import RecherchePizza from "./pages/RecherchePizza";
import ResultatFilm from "./pages/ResultatFilm";
import ResultatPizza from "./pages/ResultatPizza";
import Formulaire from "./pages/Formulaire";
import Navbar from "./pages/Navbar";
import PopupSuggestion from "./pages/PopupSuggestion";
import PopupRetourAccueil from "./pages/PopupRetourAccueil";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/film" element={<RechercheFilm />} />
          <Route path="/search/pizza" element={<RecherchePizza />} />
          <Route path="/resultat/film" element={<ResultatFilm />} />
          <Route path="/resultat/pizza" element={<ResultatPizza />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/popup/suggestion" element={<PopupSuggestion />} />
          <Route path="/popup/home" element={<PopupRetourAccueil />} />
          <Route path="/return" element={<PopupRetourAccueil />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
