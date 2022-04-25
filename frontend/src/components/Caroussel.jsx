import React from "react";
import ApiRequests from "./PosterFromApi";

function Caroussel({ posterArray }) {
  return (
    <div className="Global">
      <div className="Caroussel">
        <ApiRequests posterArray={posterArray} />
      </div>
    </div>
  );
}

export default Caroussel;
