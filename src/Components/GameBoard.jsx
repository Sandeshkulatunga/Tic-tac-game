const incialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = incialGameboard;

  for (const turn of turns) {
    const { squre, player } = turn;
    const { row, col } = squre;
    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(incialGameboard);

  // const handleselectSquare = (rowIndex, colIndex) => {
  //   console.log(" handleselectSquare");
  //   setGameBoard((previousGameboard) => {
  //     const updateGameBoard = [
  //       ...previousGameboard.map((initialArray) => [...initialArray]), //[...previousGameboard] = [null, null, null] => [...initialArray] = [null]
  //     ];
  //     console.log(updateGameBoard); //updateGameBoard = [[null, null, null],[null, null, null],[null, null, null]]
  //     updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateGameBoard;
  //   });
  //   onSelectSquare();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
