import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";
import { turn, checkWinner } from "../action creators/actionCreators";

const styles = {
  gameField: {
    height: 300
  },
  column: {
    width: 50,
    display: "inline-block",
    listStyle: "none"
  },
  cell: {
    width: 50,
    height: 50,
    background: "grey",
    borderRadius: 25,
    border: "1px solid black",
    marginBottom: 20
  },
  playerOne: {
    background: "green"
  },
  playerTwo: {
    background: "yellow"
  }
};

class GameField extends Component {
  handleTurn = (col, turnPlayer) => {
    this.props.gameField[col][0] || this.props.winner
      ? null
      : this.props.turn(col, turnPlayer);
  };

  componentDidUpdate() {
    this.props.checkWinner(this.props.gameField);
  }

  render() {
    const { gameField, turnPlayer, classes } = this.props;
    return (
      <div className={classNames(classes.gameField)}>
        {gameField.map(col => (
          <ul
            className={classNames(classes.column)}
            onClick={() => this.handleTurn(gameField.indexOf(col), turnPlayer)}
          >
            {col.map(cell => (
              <li
                className={classNames(
                  classes.cell,
                  cell ? classes[cell] : cell
                )}
              />
            ))}
          </ul>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    state => {
      return {
        gameField: state.gameField,
        turnPlayer: state.game.turnPlayer,
        winner: state.game.winner
      };
    },
    { turn, checkWinner }
  )(GameField)
);
