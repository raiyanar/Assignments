const { useState } = React;

// Every 3-in-a-row combination (indexes of the 9 squares)
const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

// Returns "X", "O", or null
function findWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function Board() {
  // 9 empty strings = 9 empty squares
  const [squares, setSquares] = useState(Array(9).fill(""));
  // true = X's turn, false = O's turn
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = findWinner(squares);
  const isDraw = !winner && squares.every((s) => s !== "");
  const gameOver = winner !== null || isDraw;

  function handleSquareClick(index) {
    // Ignore the click if the square is taken OR the game is over
    if (squares[index] !== "" || gameOver) return;

    // Make a copy so React knows something changed
    const next = squares.slice();
    next[index] = isXTurn ? "X" : "O";

    setSquares(next);
    setIsXTurn(!isXTurn);
  }

  function handleReset() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  // Build the status message
  let message = "";
  if (winner) message = `Winner: ${winner}`;
  else if (isDraw) message = "It's a draw!";

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>

      <div className="board">
        {squares.map((value, index) => (
          <button key={index} className="square" onClick={() => handleSquareClick(index)}>
            {value}
          </button>
        ))}
      </div>

      <p className="message">{message}</p>

      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Board;
