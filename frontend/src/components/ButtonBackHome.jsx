import React from "react";
import { Link } from "react-router-dom";
import arrowup from "../assets/arrowup.svg";
import "./ButtonBackHome.css";

/* Composant bouton pour retrourner à la page d'accueil à mettre en bas de toutes les pages. */

function ButtonBackHome() {
  return (
    <div className="max-height">
      <div className="button-back-home">
        <Link to="/">
          <img
            src={arrowup}
            alt="Bouton de retour à l'accueil"
            className="image-button-back-home"
          />
        </Link>
      </div>
    </div>
  );
}

export default ButtonBackHome;

/* Essai d'autres fonctions de boutons (pas utilisées) */

// function BoutonDeNavigation({ libelle, history }) {
//   return (
//     <button type="button" onClick={() => history.push("/ma-nouvelle-url")}>
//       {libelle}
//     </button>
//   );
// }
// function SomeComponent() {
//   return (
//     <Route
//       path="/"
//       render={(props) => (
//         <BoutonDeNavigation {...props} title="Changer de page" />
//       )}
//     />
//   );
// }
// function App() {
//   return (
//     <Router>
//       <SomeComponent />
//       <AnotherComponent />
//     </Router>
//   );
// }

// function redirection() {

//   const history = useHistory(),
//   const faireRedirection = () =>{
//     let url = "/",
//     history.push(url),
//   }

//   return (
//       <Button className="button-back-home"
//             onClick={faireRedirection}
//             >
//               Mon Bouton va rediriger sur "home" si on clique dessus
//         </Button>
//   ),
// }

// export default redirection;

// import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
//     return (
//       <div>
//       <Link to='/'>
//       <button type="button" className="ButtonBackHome">Retour à l'accueil</button>
//       </Link>
//       </div>
//     );
