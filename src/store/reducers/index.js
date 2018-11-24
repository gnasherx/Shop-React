import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productsReducer";
import adminProducts from "./adminProduct";

const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
  adminProducts: adminProducts
});

export default rootReducer;
