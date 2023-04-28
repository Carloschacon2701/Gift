import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import card from "./assets/card.png"

function App() {
  return (
    <div className="app">
      <div class="box">
        <div class="box-body">
          <img class="img" src={card} />
          <div class="box-lid">
            <div class="box-bowtie"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
