import {
  API,
  SET_DISCOVERED_SERIES,
  SORT_SERIES
} from "./types";

export const discoverSeries = () => ({
  type: API,
  payload: {
    url: "discover/tv",
    onSuccess: setDiscoveredSeriesData
  }
});

export const setDiscoveredSeriesData = data => ({
  type: SET_DISCOVERED_SERIES,
  payload: data
});

export const sortSeries = sort_key => {
  return dispatch => {
    dispatch({
      type: SORT_SERIES,
      payload: sort_key
    });
    dispatch(discoverSeries());
  };
};
