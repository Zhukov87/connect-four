import { combineReducers } from "redux";
import game from "./game.reducer";
import gameField from "./gameField.reducer";

export default combineReducers({
  game,
  gameField
});
