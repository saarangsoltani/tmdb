import { API_START, API_END } from "../actions/types";

let initialState = {
  isLoading: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_START:
      return Object.assign({}, state, { isLoading: true });
    case API_END:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};
