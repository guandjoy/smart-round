import React from "react";
import ReactDOM from "react-dom";

import GitHubLogo from "./GitHubLogo";
import Caption from "./Caption";
import Composition from "./Composition";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <a href="https://github.com/guandjoy/smart-round">
        <GitHubLogo />
      </a>
      <Caption topic="Smart round" />
      <Composition />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
