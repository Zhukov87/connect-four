import React, { Component } from "react";
import GameField from "./GameField";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";

const styles = {
  active: {
    border: "2px solid grey",
    width: 100
  },
  inactive: {
    width: 100
  },
  winnerString: {
    marginTop: 150,
    fontSize: 25
  }
};

class Main extends Component {
  render() {
    const { winner, turnPlayer, classes } = this.props;
    return (
      <div>
        <h1>Connect four</h1>
        <div>
          <p
            className={classNames(
              turnPlayer === "playerOne" ? classes.active : classes.inactive
            )}
          >
            First player
          </p>
          <p
            className={classNames(
              turnPlayer === "playerTwo" ? classes.active : classes.inactive
            )}
          >
            Second player
          </p>
        </div>
        <GameField />
        {winner ? (
          <p className={classNames(classes.winnerString)}>Winner: {winner}</p>
        ) : (
          <p className={classNames(classes.winnerString)}>
            The winner is not defined
          </p>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(state => {
    return {
      turnPlayer: state.game.turnPlayer,
      winner: state.game.winner
    };
  })(Main)
);
