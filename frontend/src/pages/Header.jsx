// create a page header
import React from "react";
import Logoheader from "../components/LogoHeader";

function Header() {
  return (
    <div className="header-animation" style={{ backgroundColor: "#141414" }}>
      <Logoheader />
    </div>
  );
}

export default Header;
