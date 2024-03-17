import handleAddToCart from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartItems: handleAddToCart,
});

export default rootReducer;
