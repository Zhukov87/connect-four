import { TURN } from '../actionCreators/constants';
import { createField } from '../lib/connectFour';

const initialState = createField();

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TURN: {
      const { gameField } = payload;
      return gameField;
    }
    default: {
      return state;
    }
  }
};
