import React from "react";
import "./TextHome.css";

/* Tableau avec les différents paragraphe en tant qu'éléments. */
const texte = [
  "Si tu as atterri par ici, c&apos;est sûrement que tu ne sais pas quoi manger comme pizza avec ton film ou que tu ne sais pas quel film se mariera le mieux avec ta pizza préférée.",
  "Chez Mood, on a imaginé une solution rien que pour toi !",
  "Si tu as envie que l&apos;on t aide à choisir ta pizza, clique sur le bouton en forme de pizza. Si tu souhaites une proposition de film, clique sur la bobine. Et la magie de Mood opérera pour que tu passes une excellente soirée !",
];

/* Composant texte de présentation à mettre dans la page d'accueil */
function TextHome() {
  return (
    <div>
      <div>
        <h1 className="titre-texte-présentation-page-accueil">
          Bienvenue sur Mood !
        </h1>
      </div>
      {texte.map((value) => {
        return (
          <div key={value}>
            <p className="paragraphe-texte-présentation-page-accueil">
              {value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TextHome;
