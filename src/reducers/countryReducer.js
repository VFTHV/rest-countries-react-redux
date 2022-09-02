export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRY":
      return action.payload;
    default:
      return state;
  }
};
