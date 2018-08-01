import { TURN, CHECK_WINNER } from "./constants";

export function turn(col, turnPlayer) {
  return {
    type: TURN,
    payload: { col, turnPlayer }
  };
}

export function checkWinner(gameField, turnPlayer) {
  return {
    type: CHECK_WINNER,
    payload: { gameField, turnPlayer }
  };
}
