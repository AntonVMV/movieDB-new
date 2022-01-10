import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "./styles/global";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
