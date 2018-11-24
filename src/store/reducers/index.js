import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productsReducer";
import adminProducts from "./adminProduct";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
  adminProducts: adminProducts,
  cartReducer: cartReducer
});

export default rootReducer;
