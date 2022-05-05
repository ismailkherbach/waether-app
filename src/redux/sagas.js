import { all } from "redux-saga/effects";
import wheatherSagas from "./weather/saga";
export default function* rootSaga(getState) {
  yield all([wheatherSagas()]);
}
