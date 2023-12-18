import SquareType from "../types/squareType";
import getWinningLine from "./getWinningLine";

const chechWinner = (n: number, square: SquareType[]) => {
  const result: boolean[] = [];
  for(let i = 0; i < 9; i++){
    result[i] = false;
  }

  const winningLine: number[] | null = getWinningLine(square);
  if (winningLine === null) {
   return false;
  }

  for(let i = 0; i < winningLine.length; i++){
    for(let j = 0; j < square.length; j++){
      if (winningLine[i] === j){
        result[j] = true;
      }
    }
  }

  return result[n];
};

export default chechWinner;