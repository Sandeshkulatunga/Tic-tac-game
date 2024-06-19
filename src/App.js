import { useState } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import Log from "./Components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurn((previousValue) => {
      let currentPlayer = "X";
      if (previousValue.length > 0 && previousValue[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurned = [
        { squre: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousValue,
      ];
      return updatedTurned;
    });
  };

  console.log(gameTurn);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Sandesh" symbol="X" isActive={activePlayer === "X"} />
          <Player name="sajith" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
        <Log />
      </div>
      LOGO
    </main>
  );
}

export default App;
