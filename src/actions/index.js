import restCountries from "../apis/restCountries";

export const fetchAll = () => async (dispatch) => {
  const response = await restCountries.get("/all");

  dispatch({ type: "FETCH_ALL", payload: response.data });
};
