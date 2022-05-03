import React from "react";
import MoodLogo from "../assets/moodlogo.png";
import HomeButton from "../components/HomeButton";
import "./Home.css";
import TextHome from "../components/TextHome";

// import "./App.css"; A REACTIVER SI ON UTILISE TAILWIND

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
