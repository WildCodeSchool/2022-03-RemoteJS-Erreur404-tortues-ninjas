import React from "react";
import "./Title.css";

/* Composant titre pour page formulaire, barre de recherche pizza et barre de recherche film */
function Title({ text, cls }) {
  return <h1 className={cls}>{text}</h1>;
}
export default Title;
