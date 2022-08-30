import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  allCountries: countriesReducer,
  filter: filterReducer,
});
