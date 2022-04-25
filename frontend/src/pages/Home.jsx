import React from "react";
import MoodLogo from "../assets/MoodLogo.png";
import HomeButton from "../components/HomeButton";
import "./Home.css";
import TextePresentation from "../components/Text-Home";
// import "./App.css";

function Home() {
  return (
    <div>
      <div className="MoodLogo">
        <img src={MoodLogo} alt="MoodLogo" />
      </div>
      <HomeButton />
      <TextePresentation />
    </div>
  );
}

export default Home;
