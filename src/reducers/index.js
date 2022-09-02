import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import filterReducer from "./filterReducer";
import countryReducer from "./countryReducer";
import bordersReducer from "./bordersReducer";

export default combineReducers({
  allCountries: countriesReducer,
  filter: filterReducer,
  country: countryReducer,
  borders: bordersReducer,
});
