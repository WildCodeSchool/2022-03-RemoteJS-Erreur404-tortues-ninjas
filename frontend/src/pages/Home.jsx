import React from "react";
import MoodLogo from "../assets/MoodLogo.png";
import HomeButton from "../components/HomeButton";
import ButtonBackHome from "../components/ButtonBackHome";
import "./Home.css";
import TextHome from "../components/TextHome";

// import "./App.css"; A REACTIVER SI ON UTILISE TAILWIND

function Home() {
  return (
    <div>
      <MoodLogo />
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <TextHome />
      <HomeButton />
      <ButtonBackHome />
    </div>
  );
}

export default Home;
