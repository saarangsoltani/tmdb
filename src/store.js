import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";

import apiMiddleware from "./middlewares/api";
import createRootReducer from "./reducers";
import { saveState } from "./localStorage";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middlewares = [thunk, routerMiddleware(history), apiMiddleware];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

store.subscribe(() => {
  saveState("favorites", store.getState().favorites);
});

export default store;
