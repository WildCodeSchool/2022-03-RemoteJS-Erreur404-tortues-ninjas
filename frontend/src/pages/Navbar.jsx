import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search/film">Rechercher un film</Link>
        </li>
        <li>
          <Link to="/search/pizza">Rechercher une pizza</Link>
        </li>
        <li>
          <Link to="/resultat/film">Résultat film</Link>
        </li>
        <li>
          <Link to="/resultat/pizza">Résultat pizza</Link>
        </li>
        <li>
          <Link to="/formulaire">Formulaire</Link>
        </li>
        <li>
          <Link to="/popup/suggestion">Suggestion</Link>
        </li>
        <li>
          <Link to="/popup/home">Retour accueil</Link>
        </li>
        <li>
          <Link to="/return">Retour</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
