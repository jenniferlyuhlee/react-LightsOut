import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <h1>Lights Out</h1>
        <p>Click on the cells to turn off all the lights.
          Beware—clicking on a cell toggles the cells around it!
        </p>
        <Board />
      </div>
  );
}

export default App;
