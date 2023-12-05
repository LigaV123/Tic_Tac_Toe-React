import Square from './Square'
import './styles/Board.css'
import SquareType from '../types/squareType';
import calculateWinner from '../functions/winner';
import GameStatus from './GameStatus';

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

  return (
    <>
      <GameStatus square={square} xIsNext={xIsNext}/>
      <div className='board-row'>
        <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={square[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board