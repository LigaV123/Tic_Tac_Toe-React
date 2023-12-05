import './styles/Square.css'
import SquareType from '../types/squareType';

const Square = (props : {value : SquareType, onSquareClick : () => void}) => {

  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  )
}

export default Square