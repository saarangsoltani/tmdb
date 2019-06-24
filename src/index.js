import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import Home from "./pages/home";
import Logo from "./images/logo.png";
import * as serviceWorker from "./serviceWorker";
import "mini.css";
import "./styles/index.css";
import "./styles/helpers.css";

const targetEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
    <div className="header">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="container">
        <div className="col-lg-8  col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
          <main className="main-content">
            <Route exact path="/" component={Home} />
          </main>
        </div>
      </div>
      <footer className="align-center">
        <p>Created with React and Redux</p>
      </footer>
      </ConnectedRouter>
  </Provider>,
  targetEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
