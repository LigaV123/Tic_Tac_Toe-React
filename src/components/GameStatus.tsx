import calculateWinner from '../functions/winner'
import SquareType from '../types/squareType'
import './styles/GameStatus.css'

const GameStatus = (props : {square: SquareType[]; xIsNext: boolean}) => {
  const winner = calculateWinner(props.square);
  let status : string = '';
  
  if (winner) {
    status = "Winner is player " + winner;
  } else {
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  }

  return (
    <div className='status'>
      {status}
    </div>
  )
}

export default GameStatus;