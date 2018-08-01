import { TURN } from "../actionCreators/constants";

const initialState = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false]
];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TURN: {
      let nextState = [...state];
      const { col, turnPlayer } = payload;
      let counter = 0;
      for (let i = nextState[col].length - 1; i >= 0; i--) {
        if (!nextState[col][i]) counter++;
        //!nextState[col][i] ? counter++ : counter;
        counter === 1 && !nextState[col][i]
          ? (nextState[col][i] = turnPlayer)
          : nextState[col][i];
      }
      return nextState;
    }
    default: {
      return state;
    }
  }
};
