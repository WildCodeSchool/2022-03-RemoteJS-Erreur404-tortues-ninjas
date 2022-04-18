import React from "react";
import "./TextePrésentationPageAccueil.css";

/* Texte de présentation de notre projet sur la page d'accueil, à mettre entre les deux boutons de choix (bobine et pizza) pour orienter l'utilisateur. */
function TextePrésentationPageAccueil() {
  return (
    <div className="TextePrésentationPageAccueil">
      <div className="h1-TextePrésentationPageAccueil">
        <h1>Bienvenue sur Mood !</h1>
      </div>
      <div className="p-textePrésentationPageAccueil">
        <p>
          Si tu as atterri par ici, c est sûrement que tu ne sais pas quoi
          manger comme pizza avec ton film ou que tu ne sais pas quel film se
          mariera le mieux avec ta pizza préférée. Chez Mood, on a imaginé une
          solution rien que pour toi ! Si tu as envie que l on t aide à choisir
          ta pizza, clique sur le bouton vert. Si tu souhaites une proposition
          de film, clique sur la bobine. Et la magie de Mood opérera pour que tu
          passes une excellente soirée !
        </p>
      </div>
    </div>
  );
}

export default TextePrésentationPageAccueil;
