import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productsReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer
});

export default rootReducer;
