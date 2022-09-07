import restCountries from "../apis/restCountries";

export const fetchAll = () => async (dispatch) => {
  const response = await restCountries.get("/all");
  dispatch({ type: "FETCH_ALL", payload: response.data });
};

export const fetchCountry = (code) => async (dispatch) => {
  const response = await restCountries.get(
    `/alpha?codes=${code.toLowerCase()}`
  );
  dispatch({ type: "FETCH_COUNTRY", payload: response.data });
};

export const fetchBorders = (codes) => async (dispatch) => {
  const response = await restCountries.get(
    `/alpha?codes=${codes.join().toLowerCase()}`
  );
  dispatch({ type: "FETCH_BORDERS", payload: response.data });
};

export const assignRegion = (region) => {
  return {
    type: "REGION_FILTER",
    payload: region,
  };
};
export const assignCountry = (country) => {
  return {
    type: "COUNTRY_FILTER",
    payload: country,
  };
};
