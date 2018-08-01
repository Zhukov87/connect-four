import { TURN, CHECK_WINNER } from "../actionCreators/constants";

const initialState = {
  winner: null,
  turnPlayer: "playerOne"
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TURN: {
      let nextState = { ...state };
      nextState.turnPlayer === "playerOne"
        ? (nextState.turnPlayer = "playerTwo")
        : (nextState.turnPlayer = "playerOne");
      return nextState;
    }
    case CHECK_WINNER: {
      const { gameField } = payload;
      let nextState = { ...state };

      //check column
      gameField.forEach(element => {
        let counter = 0;
        element.forEach((item, index, arr) => {
          if (item === arr[index - 1] && item !== false) counter++;
          if (counter === 3) nextState.winner = item;
          //   item === arr[index - 1] && item != false ? counter++ : null;
          //   counter === 3 ? (nextState.winner = item) : null;
        });
      });

      //check row
      for (let i = 0; i < gameField.length - 1; i++) {
        let counter = 0;
        for (let j = 0; j < gameField[i].length; j++) {
          if (gameField[j + 1] !== undefined) {
            gameField[j][i] === gameField[j + 1][i] && gameField[j][i] !== false
              ? counter++
              : (counter = 0);
            if (counter === 3) nextState.winner = gameField[j][i];
            //counter === 3 ? (nextState.winner = gameField[j][i]) : null;
          }
        }
      }

      //check diagonal
      /* 
            [0.0], [1.0], [2.0], [3.0], [4.0], [5.0], [6.0]
            [0.1], [1.1], [2.1], [3.1], [4.1], [5.1], [6.1]
            [0.2], [1.2], [2.2], [3.2], [4.2], [5.2], [6.2]
            [0.3], [1.3], [2.3], [3.3], [4.3], [5.3], [6.3]
            [0.4], [1.4], [2.4], [3.4], [4.4], [5.4], [6.4]
            [0.5], [1.5], [2.5], [3.5], [4.5], [5.5], [6.5]
            */
      for (let i = 0; i < gameField.length - 3; i++) {
        for (let j = 0; j < gameField.length - 3; j++) {
          gameField[i][j] === gameField[i + 1][j + 1] &&
          gameField[i][j] === gameField[i + 2][j + 2] &&
          gameField[i][j] === gameField[i + 3][j + 3] &&
          gameField[i][j] !== false
            ? (nextState.winner = gameField[i][j])
            : null;

          gameField[i][j + 3] === gameField[i + 1][j + 2] &&
          gameField[i][j + 3] === gameField[i + 2][j + 1] &&
          gameField[i][j + 3] === gameField[i + 3][j] &&
          gameField[i][j + 3] !== false
            ? (nextState.winner = gameField[i][j + 3])
            : null;
        }
      }

      //check draw
      if (gameField.map(e => e[0]).every(e => e)) nextState.winner = "draw";

      return nextState;
    }
    default: {
      return state;
    }
  }
};
