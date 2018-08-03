import { TURN, CHECK_WINNER } from './constants';
import { makeTurn, checkWinner } from '../lib/connectFour';

export function turn(gameField, col, turnPlayer) {
  const nextField = makeTurn(gameField, col, turnPlayer);
  const winner = checkWinner(nextField);

  return {
    type: TURN,
    payload: { gameField: nextField, winner },
  };
}
