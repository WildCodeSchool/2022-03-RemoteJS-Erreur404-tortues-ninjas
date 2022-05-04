import React from "react";

import MoodLogo from "../assets/MoodLogo.png";

import HomeButton from "../components/HomeButton";
import TextHome from "../components/TextHome";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <TextHome />
      <HomeButton />
    </div>
  );
}

export default Home;
