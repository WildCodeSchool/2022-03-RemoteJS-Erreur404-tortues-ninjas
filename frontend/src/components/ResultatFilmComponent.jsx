import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import "./ResultatFilmComponent.css";

function ResultatFilmComponent() {
  const { onePoster } = useContext(Context);

  return (
    <div className="resultat-film-component">
      <form>
        <label htmlFor="name">
          Name (4 to 8 characters):
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="4"
            maxLength="8"
            size="10"
          />
        </label>
      </form>

      <img src={onePoster.data.props.src} alt="img" />
      <button
        type="button"
        onClick={() => window.open("https://www.youtube.com", "_blank")}
      >
        VOIR LA BANDE ANNONCE
      </button>
    </div>
  );
}

export default ResultatFilmComponent;
