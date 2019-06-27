import { SET_SELECTED_SEASON } from "../actions/types";
let initialState = { selectedSeason: {episodes: []} };

export const seasonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SEASON:
      return Object.assign({}, state, { selectedSeason: action.payload });
    default:
      return state;
  }
};
