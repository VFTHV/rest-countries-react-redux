export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_BORDERS":
      return action.payload;
    default:
      return state;
  }
};
