export default (state = {}, action) => {
  switch (action.type) {
    case "REGION_FILTER":
      return { ...state, ["region"]: action.payload, ["country"]: null };
    case "COUNTRY_FILTER":
      return { ...state, ["region"]: null, ["country"]: action.payload };
    default:
      return state;
  }
};
