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
    let sortKey = state.ui.selectedSortOrder;
    let genres = state.ui.selectedGenres;

    url += `&sort_by=${sortKey}`;
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
