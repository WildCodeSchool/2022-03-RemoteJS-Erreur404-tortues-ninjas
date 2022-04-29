import React from "react";
import ButtonBackHome from "../components/ButtonBackHome";
import ButtonValidateResult from "../components/ButtonValidateResult";

function ResultatPizza() {
  return (
    <div>
      <h1>Résultat films</h1>
      <ButtonValidateResult buttoncolor="bouton-valider-resultat-pizza" />
      <ButtonBackHome />
    </div>
  );
}
export default ResultatPizza;
