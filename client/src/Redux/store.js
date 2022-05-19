import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./Reducer/combineReducer";
import thunk from "redux-thunk";

// const asynxMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

export const store = legacy_createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
