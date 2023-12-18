import './styles/Square.css'
import SquareType from '../types/squareType';

const Square = (props : {value : SquareType, onSquareClick : () => void, isWinner: boolean}) => {
  
  return (
    <button className={`square ${props.isWinner ? 'is-winner' : 'no-winner'}`} onClick={props.onSquareClick}>
      {props.value}
    </button>
  )
}

export default Square