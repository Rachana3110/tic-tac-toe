import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [cell, setcell] = useState(Array(9).fill(""));
  const [turn, setturn] = useState("X");
  const [winner, setwinner] = useState();

  const checkWinner = (square) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          square[pattern[0]] === "" ||
          square[pattern[1]] === "" ||
          square[pattern[2]] === ""
        ) {
          return;
        } else if (
          square[pattern[0]] === square[pattern[1]] &&
          square[pattern[1]] === square[pattern[2]]
        ) {
          setwinner(square[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cell[num] !== "" || winner) {
      return;
    }
    const square = [...cell];
    if (turn === "X") {
      square[num] = "X";
      setturn("O");
    } else {
      square[num] = "O";
      setturn("X");
    }
    checkWinner(square);
    setcell(square);
  };

  const handleReset = () => {
    setcell(Array(9).fill(""));
    setwinner(null);
  };

  if (!cell.includes("") && !winner) {
    setwinner("Draw");
  }

  return (
    <div className="App">
      <p>Turn : {turn}</p>
      <Board cell={cell} handleClick={handleClick} />
      {winner && (
        <div>
          <p>Winner : {winner}</p>
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
