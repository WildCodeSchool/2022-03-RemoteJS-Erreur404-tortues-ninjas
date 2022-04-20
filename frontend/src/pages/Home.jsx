// import logo from "@assets/logo.svg";
import HomeButton from "../components/HomeButton";
// import logo from "@assets/logo.png";

export default function Home() {
  return (
    <header className="App-header">
      <p>Hello Vite + React !</p>
      <HomeButton />

      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}
