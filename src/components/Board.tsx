import Square from './Square'
import './styles/Board.css'
import SquareType from '../types/squareType';
import calculateWinner from '../functions/winner';
import GameStatus from './GameStatus';
import chechWinner from '../functions/checkWinner';

const Board = ({xIsNext, square, onPlay}:
   {xIsNext: boolean; square: SquareType[]; onPlay: (nextSquare: SquareType[]) => void}
  ) => {

  const handleClick = (i: number) => {
    if(square[i] || calculateWinner(square)){
      return;
    }
    
    const nextSquare = square.slice();
    if(xIsNext) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    
    onPlay(nextSquare);
  }

  const printSquares = (index: number) => {
    return (
      <Square 
        key={index}
        value={square[index]} 
        onSquareClick={() => handleClick(index)} 
        isWinner={chechWinner(index, square)}
      />
    )
  };

  return (
    <>
      <GameStatus square={square} xIsNext={xIsNext}/>
      <div className="board-row">
        {[0, 1, 2].map((i) => printSquares(i))}
      </div>
      <div className="board-row">
        {[3, 4, 5].map((i) => printSquares(i))}
      </div>
      <div className="board-row">
        {[6, 7, 8].map((i) => printSquares(i))}
      </div>
    </>
  )
}

export default Board