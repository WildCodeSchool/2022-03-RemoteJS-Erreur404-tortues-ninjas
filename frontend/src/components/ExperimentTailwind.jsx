import React from "react";

/* Création d'un composant d'essai avec Tailwind */
function ExperimentTailwind() {
  return (
    <div>
      <div>
        <h1 className="titre-texte-présentation-page-accueil-tailwind">
          Bienvenue sur Mood !
        </h1>
      </div>
      <div>
        <p className="paragraphe-texte-présentation-page-accueil-tailwind">
          Si tu as atterri par ici, c est sûrement que tu ne sais pas quoi
          manger comme pizza avec ton film ou que tu ne sais pas quel film se
          mariera le mieux avec ta pizza préférée.
        </p>
      </div>
      <div>
        <p className="paragraphe-texte-présentation-page-accueil-tailwind">
          {" "}
          Chez Mood, on a imaginé une solution rien que pour toi !{" "}
        </p>
      </div>
      <div>
        <p className="paragraphe-texte-présentation-page-accueil-tailwind">
          Si tu as envie que l on t aide à choisir ta pizza, clique sur le
          bouton vert. Si tu souhaites une proposition de film, clique sur la
          bobine. Et la magie de Mood opérera pour que tu passes une excellente
          soirée !
        </p>
      </div>
    </div>
  );
}

export default ExperimentTailwind;
