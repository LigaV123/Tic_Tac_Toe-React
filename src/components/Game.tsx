import {useState} from 'react'
import Board from './Board'
import './styles/Board.css'
import SquareType from '../types/squareType';

const Game = () => {
  const [history, setHistory] = useState<SquareType[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: SquareType[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((square, move) => {
    let description: string = move > 0 ? 'Go to move #' + move : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <div>You are at move #{currentMove}</div>
        <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}

export default Game