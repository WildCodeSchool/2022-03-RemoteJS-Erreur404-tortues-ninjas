import React from "react";
import TestAPIRequests from "./TestAPIRequests";
import "./Caroussel.css";

function Caroussel() {
  return (
    <div className="Global">
      <div className="Caroussel">
        <TestAPIRequests />
        <TestAPIRequests />
        <TestAPIRequests />
        <TestAPIRequests />
      </div>
    </div>
  );
}

export default Caroussel;
