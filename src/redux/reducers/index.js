import { combineReducers } from "redux";
import cart from "./cart";
import { filtres } from "./filtres";
import { pizzas } from "./pizzas";
export const rootReducer = combineReducers({
  filtres,
  pizzas,
  cart,
});
