import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecherchePizza from "./pages/RecherchePizza";
import ResultatPizza from "./pages/ResultatPizza";
import RechercheFilm from "./pages/RechercheFilm";
import ResultatFilm from "./pages/ResultatFilm";
import Formulaire from "./pages/Formulaire";
// import Footer from "./components/Footer";
import PopupSuggestion from "./pages/PopupSuggestion";
import PopupRetourAccueil from "./pages/PopupRetourAccueil";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
