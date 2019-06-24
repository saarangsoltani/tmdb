import { API_START, API_END, SORT_SERIES } from "../actions/types";

let initialState = {
  selectedSortOrder: "popularity.desc",
  isLoading: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_SERIES:
      return Object.assign({}, state, { selectedSortOrder: action.payload });
    case API_START:
      return Object.assign({}, state, { isLoading: true });
    case API_END:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};
