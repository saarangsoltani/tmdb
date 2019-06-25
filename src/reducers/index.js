import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { seriesReducer } from "./seriesReducer";
import { genresReducer } from "./genresReducer";
import { uiReducer } from "./uiReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    series: seriesReducer,
    genres: genresReducer,
    ui: uiReducer
  });
