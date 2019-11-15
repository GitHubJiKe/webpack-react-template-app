/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 10:31:25
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 15:19:43
 */
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
let enhancer = null;

if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  enhancer = applyMiddleware(thunk);
}
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet
};

const rootReducers = combineReducers({ ...reducers });

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

export default store;
