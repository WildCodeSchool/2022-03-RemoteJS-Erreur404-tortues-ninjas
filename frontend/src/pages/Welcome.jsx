// create a page header
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logoheader from "../components/LogoHeader";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div className="welcome">
      <div className="welcome-animation" style={{ backgroundColor: "#141414" }}>
        <Logoheader />
      </div>
    </div>
  );
}

export default Welcome;
