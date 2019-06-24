import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { seriesReducer } from "./seriesReducer";
import { uiReducer } from "./uiReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    series: seriesReducer,
    ui: uiReducer
  });
