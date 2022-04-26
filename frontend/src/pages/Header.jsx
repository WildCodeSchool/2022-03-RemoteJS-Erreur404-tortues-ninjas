// create a page header
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logoheader from "../components/LogoHeader";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div className="header">
      <div className="header-animation" style={{ backgroundColor: "#141414" }}>
        <Logoheader />
      </div>
    </div>
  );
}

export default Header;
