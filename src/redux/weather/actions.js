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

export const getWeatherByPosition = (position) => ({
  type: GET_WEATHER_BY_GPS,
  payload: position,
});
export const getWeatherByPositionSuccess = (item) => ({
  type: GET_WEATHER_BY_GPS_SUCCESS,
  payload: item,
});
export const getWeatherByPositionError = (error) => ({
  type: GET_WEATHER_BY_GPS_ERROR,
  payload: error,
});

export const getWeatherByCountry = (lat, lon) => ({
  type: GET_WEATHER_BY_COUNTRY,
  payload: { lat, lon },
});

export const getWeatherByCountrySuccess = (item) => ({
  type: GET_WEATHER_BY_COUNTRY_SUCCESS,
  payload: item,
});
export const getWeatherByCountryError = (error) => ({
  type: GET_WEATHER_BY_COUNTRY_ERROR,
  payload: error,
});
export const getWeatherDaily = () => ({
  type: GET_WEATHER_DAILY,
});
export const getWeatherDailySuccess = (item) => ({
  type: GET_WEATHER_DAILY_SUCCESS,
  payload: item,
});
export const getWeatherDailyError = (error) => ({
  type: GET_WEATHER_DAILY_ERROR,
  payload: error,
});
