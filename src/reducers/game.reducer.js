import { TURN } from '../actionCreators/constants';

const initialState = {
  winner: null,
  turnPlayer: 'playerOne',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TURN: {
      const { winner } = payload;
      const turnPlayer =
        state.turnPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
      return {
        ...state,
        winner,
        turnPlayer,
      };
    }
    default: {
      return state;
    }
  }
};
