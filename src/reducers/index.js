import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { seriesReducer } from "./seriesReducer";
import { genresReducer } from "./genresReducer";
import { uiReducer } from "./uiReducer";
import { favoritesReducer } from "./favoritesReducer";
import { seasonsReducer } from "./seasonsReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    series: seriesReducer,
    genres: genresReducer,
    ui: uiReducer,
    favorites: favoritesReducer,
    seasons: seasonsReducer
  });
