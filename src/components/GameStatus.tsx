import calculateWinner from '../functions/winner'
import SquareType from '../types/squareType'
import './styles/GameStatus.css'

const GameStatus = (props : {square: SquareType[]; xIsNext: boolean}) => {
  const winner = calculateWinner(props.square);
  let status: string = '';

  let totalNullCount: number = 9;
  props.square.forEach((s: SquareType | null) => { return totalNullCount -= s === null ? 0 : 1})

  if (winner) {
    status = "Winner is player " + winner;
  } else if (winner === null && totalNullCount === 0) {
    status = "The game is a tie";
  } else {
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  }

  return (
    <h2 className='status'>
      {status}
    </h2>
  )
}

export default GameStatus;