import React from "react";
import MoodLogo from "../assets/MoodLogo.png";
import HomeButton from "../components/HomeButton";
import ButtonBackHome from "../components/ButtonBackHome";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <HomeButton />
      <ButtonBackHome />
    </div>
  );
}

export default Home;
