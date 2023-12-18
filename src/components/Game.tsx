import {useState} from 'react'
import Board from './Board'
import './styles/Game.css'
import SquareType from '../types/squareType';

const Game = () => {
  const [history, setHistory] = useState<SquareType[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: SquareType[]) => {
    const nextHistory: SquareType[][] = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description: string = move > 0 ? 'Go to move #' + move : 'Go to game start';

    return (
      <li key={move}>
        <button className='moves-style' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  })

  // const ascDescMoves = () => {
  //   const changeOrder = [...history].reverse();
  //   setHistory(changeOrder);
  // }

  return (
    <div className='game'>
      <div className='game-board'>
        <h1 className='text'>You are at move <span className='move-number'>#{currentMove}</span></h1>
        <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>
          {moves}
        </ol>
        {/*<button onClick={ascDescMoves}>Asccending/Descending</button>*/}
      </div>
    </div>
  )
}

export default Game