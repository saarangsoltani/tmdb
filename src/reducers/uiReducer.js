import {
  API_START,
  API_END,
  SORT_SERIES,
  FILTER_BY_GENRES
} from "../actions/types";

let initialState = {
  selectedSortOrder: "popularity.desc",
  selectedGenres: [],
  isLoading: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_SERIES:
      return Object.assign({}, state, { selectedSortOrder: action.payload });
    case FILTER_BY_GENRES:
      return Object.assign({}, state, { selectedGenres: action.payload });
    case API_START:
      return Object.assign({}, state, { isLoading: true });
    case API_END:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};
