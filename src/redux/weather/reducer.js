import {
  GET_WEATHER_DAILY,
  GET_WEATHER_DAILY_SUCCESS,
  GET_WEATHER_DAILY_ERROR,
  GET_WEATHER_BY_COUNTRY,
  GET_WEATHER_BY_COUNTRY_SUCCESS,
  GET_WEATHER_BY_COUNTRY_ERROR,
  GET_WEATHER_BY_GPS,
  GET_WEATHER_BY_GPS_SUCCESS,
  GET_WEATHER_BY_GPS_ERROR,
} from "../actions";

const INIT_STATE = {
  loading: false,
  position: null,
  wheatherCountry: "",
  item: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER_DAILY:
      return { ...state, loading: true };
    case GET_WEATHER_DAILY_SUCCESS:
      return { ...state, loading: false, item: action.payload };
    case GET_WEATHER_DAILY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_WEATHER_BY_GPS:
      return { ...state, loading: true };
    case GET_WEATHER_BY_GPS_SUCCESS:
      return { ...state, loading: false, item: action.payload };
    case GET_WEATHER_BY_GPS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_WEATHER_BY_COUNTRY:
      return { ...state, loading: true };
    case GET_WEATHER_BY_COUNTRY_SUCCESS:
      return { ...state, loading: false, whethCountry: action.payload };
    case GET_WEATHER_BY_COUNTRY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
