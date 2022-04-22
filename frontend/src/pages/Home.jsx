import React from "react";
import Footer from "../components/Footer";
import TextePresentation from "../components/TextePresentation";
import HomeButton from "../components/HomeButton";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <HomeButton />
      <TextePresentation />
      <Footer />
    </div>
  );
}

export default Home;
