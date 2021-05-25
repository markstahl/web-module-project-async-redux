import axios from "axios";

export const LOAD_DATA = "LOAD_DATA";
export const DATA_LOADED = "DATA_LOADED";

export const fetchHolidays = () => {
  return function(dispatch) {
    const key = '699794ea-e58c-497b-a5ae-b858632d74fd';
    dispatch({ type: LOAD_DATA });
    axios
      .get(`https://holidayapi.com/v1/holidays?pretty&key=${key}&country=US&year=2020`)
      .then(res => {
        dispatch({ type: DATA_LOADED, payload: res.data.holidays });
      })
      .catch(err => {
        console.error(err)
      })
  };
};