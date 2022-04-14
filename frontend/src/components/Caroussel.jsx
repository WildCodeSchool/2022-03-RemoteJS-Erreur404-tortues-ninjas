import React from "react";
import TestAPIRequests from "@components/TestAPIRequests";
import "@components/Caroussel.css";

function Caroussel() {
  return (
    <div className="Caroussel">
      <TestAPIRequests />
      <TestAPIRequests />
      <TestAPIRequests />
      <TestAPIRequests />
    </div>
  );
}

export default Caroussel;
