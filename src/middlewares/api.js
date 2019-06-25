import axios from "axios";
import { API, API_START, API_END } from "../actions/types";
import { baseUrl, apiKey } from "../config";

const apiMiddleware = ({ getState, dispatch }) => next => action => {
  next(action);
  if (action.type !== API) return;

  const endpoint = action.payload.url;
  let url = [baseUrl, endpoint, apiKey].join("");
  if (endpoint.includes("discover/tv")) {
    let state = getState();
    const sortKey = state.ui.selectedSortOrder;
    const genres = state.ui.selectedGenres;
    const page = state.series.discovered.page;

    url += `&page=${page}&sort_by=${sortKey}`;
    if (genres.length) {
      url += `&with_genres=${genres.join()}`;
    }
  }
  dispatch({ type: API_START });
  return axios
    .request({
      url
    })
    .then(({ data }) => {
      dispatch({ type: API_END });
      dispatch(action.payload.onSuccess(data));
    });
};

export default apiMiddleware;
