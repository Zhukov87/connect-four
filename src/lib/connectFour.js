// Functional style

export const createField = () => [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false]
];

export const makeTurn = (field, col, player) => {
  const nextField = [...field];

  const freeCellIndex = nextField[col].lastIndexOf(false);

  nextField[col][freeCellIndex] = player;

  return nextField;
};

//   'playerOne' or 'playerTwo' - if winner
//   'draw' - if draw
//   null - if the game continues
export const checkWinner = field => {
  //check column

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length - 3; j++) {
      if (
        field[i][j] === field[i][j + 1] &&
        field[i][j] === field[i][j + 2] &&
        field[i][j] === field[i][j + 3] &&
        field[i][j] !== false
      )
        return field[i][j];
    }
  }

  //check row
  for (let i = 0; i < field.length - 3; i++) {
    for (let j = 0; j < field.length - 1; j++) {
      if (
        field[i][j] === field[i + 1][j] &&
        field[i][j] === field[i + 2][j] &&
        field[i][j] === field[i + 3][j] &&
        field[i][j] !== false
      )
        return field[i][j];
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
  for (let i = 0; i < field.length - 3; i++) {
    for (let j = 0; j < field.length - 3; j++) {
      if (
        field[i][j] === field[i + 1][j + 1] &&
        field[i][j] === field[i + 2][j + 2] &&
        field[i][j] === field[i + 3][j + 3] &&
        field[i][j] !== false
      )
        return field[i][j];
      if (
        field[i][j + 3] === field[i + 1][j + 2] &&
        field[i][j + 3] === field[i + 2][j + 1] &&
        field[i][j + 3] === field[i + 3][j] &&
        field[i][j + 3] !== false
      )
        return field[i][j + 3];
    }
  }

  if (field.map(e => e[0]).every(e => e)) return "draw";
  return null;
};
