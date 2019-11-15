/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 10:31:25
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 10:42:43
 */
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
let enhancer = null;

if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  enhancer = applyMiddleware(thunk);
}
const rootReducers = combineReducers({ ...reducers });
const store = createStore(rootReducers, enhancer);

export default store;
