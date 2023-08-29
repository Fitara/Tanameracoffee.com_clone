import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
// import categoryReducer from "./reducers/categoryReducer";

const rootReducers = combineReducers({
  productReducer,
});

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
