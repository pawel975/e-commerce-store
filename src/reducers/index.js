import { combineReducers } from "redux";
import cartElements from "./cartElements";
import cartOverlay from "./cartOverlay";
import currenciesList from "./currenciesList";
import currentCurrencySymbol from "./currentCurrencySymbol";

const rootReducer = combineReducers({
  cartOverlay,
  currenciesList,
  currentCurrencySymbol,
  cartElements,
});

export default rootReducer;