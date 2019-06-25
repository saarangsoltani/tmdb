import {
  ADD_FAVORITE_ITEM,
  REMOVE_FAVORITE_ITEM
} from "../actions/types";
import { loadState } from "../localStorage";

let initialState = loadState("favorites") || [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      return insertArrayItem(state, action.payload);
    case REMOVE_FAVORITE_ITEM:
      return removeArrayItem(state, action.payload);
    default:
      return state;
  }
};

function insertArrayItem(array, item) {
  let newArray = array.slice();
  newArray.push(item);
  return newArray;
}

function removeArrayItem(array, itemId) {
  let newArray = array.slice();
  var index = array.findIndex(fav => fav.id === itemId);
  newArray.splice(index, 1);
  return newArray;
}
