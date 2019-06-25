import {
  API,
  SET_DISCOVERED_SERIES,
  SORT_SERIES,
  FILTER_BY_GENRES,
  SET_PAGINATION_PAGE
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

export const filterByGenres = genres => {
  return dispatch => {
    dispatch({ type: FILTER_BY_GENRES, payload: genres });
    dispatch(discoverSeries());
  };
};

export const setPaginationPage = page => {
  return dispatch => {
    dispatch({
      type: SET_PAGINATION_PAGE,
      payload: page
    });
    dispatch(discoverSeries());
  };
};
