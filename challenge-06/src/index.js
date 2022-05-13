import React from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./stores/reducers";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import Router from "./routes";
import { AuthProvider } from "./context/AuthProvider";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
