import {
  SET_DISCOVERED_SERIES,
} from "../actions/types";

let initialState = {
  selectedSeries: { seasons: [] },
  discovered: { page: 1, total_results: 0, total_pages: 0, results: [] }
};

export const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISCOVERED_SERIES:
      return Object.assign({}, state, { discovered: action.payload });
    default:
      return state;
  }
};
