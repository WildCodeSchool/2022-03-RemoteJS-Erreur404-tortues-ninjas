import React from "react";
import TestAPIRequests from "@components/TestAPIRequests";
import "@components/Caroussel.css";

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
