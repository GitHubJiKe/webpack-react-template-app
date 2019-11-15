/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:31
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 15:12:43
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import store, { persistor } from "./store";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  root
);
