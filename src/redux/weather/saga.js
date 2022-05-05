import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  GET_WEATHER_DAILY,
  GET_WEATHER_BY_COUNTRY,
  GET_WEATHER_BY_GPS,
} from "../actions";
import axios from "axios";
import {
  getWeatherByCountry,
  getWeatherByPosition,
  getWeatherDailySuccess,
  getWeatherByCountrySuccess,
} from "./actions";

const getWheatherDailyAsync = async () =>
  await axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=37&lon=50&APPID=92c8300d061b52131015c992aad759d7"
    )
    .then(
      (response) => response
      // this.setState({ weatherDaily: response.data.daily });
    )
    .catch((error) => error);

function* getWheatherDaily({}) {
  try {
    const loginUser = yield call(getWheatherDailyAsync);
    if (loginUser.status == 200) {
      console.log(loginUser.status);
      //   localStorage.setItem("user_id", JSON.stringify(loginUser.data));
      yield put(getWeatherDailySuccess(loginUser.data.daily));
    } else {
      console.log("Fetch failed :", loginUser);
    }
  } catch (error) {
    console.log("Fetch error : ", error);
  }
}

const getWheatherCountryAsync = async (lat, lon) =>
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=92c8300d061b52131015c992aad759d7`
    )
    .then(
      (response) => response
      // this.setState({ weatherDaily: response.data.daily });
    )
    .catch((error) => error);

function* getWheatherCountry({ payload }) {
  var { lat, lon } = payload;
  console.log(payload);
  try {
    const loginUser = yield call(getWheatherCountryAsync, lat, lon);
    if (loginUser.status == 200) {
      console.log(loginUser.status);
      //   localStorage.setItem("user_id", JSON.stringify(loginUser.data));
      yield put(getWeatherByCountrySuccess(loginUser.data));
    } else {
      console.log("Fetch failed :", loginUser);
    }
  } catch (error) {
    console.log("Fetch error : ", error);
  }
}

export function* watchGetWhaitherDaily() {
  yield takeEvery(GET_WEATHER_DAILY, getWheatherDaily);
}

export function* watchGetWhaitherCountry() {
  yield takeEvery(GET_WEATHER_BY_COUNTRY, getWheatherCountry);
}
export default function* rootSaga() {
  yield all([fork(watchGetWhaitherDaily), fork(watchGetWhaitherCountry)]);
}
