import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import provinces from "./reducers/provinces";
let enhancer = null;

if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  enhancer = applyMiddleware(thunk);
}

const store = createStore(provinces, enhancer);

export default store;
