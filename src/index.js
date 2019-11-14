/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:31
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 19:01:41
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
