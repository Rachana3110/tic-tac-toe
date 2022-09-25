import React from "react";
import "../css/Board.css";

const Board = ({ cell, handleClick }) => {
  const Square = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cell[num]}</td>;
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <Square num={0} />
            <Square num={1} />
            <Square num={2} />
          </tr>
          <tr>
            <Square num={3} />
            <Square num={4} />
            <Square num={5} />
          </tr>
          <tr>
            <Square num={6} />
            <Square num={7} />
            <Square num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
