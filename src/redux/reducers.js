import { combineReducers } from "redux";
import wheaterReducer from "./weather/reducer";

const reducers = combineReducers({
  wheaterReducer,
});

export default reducers;
