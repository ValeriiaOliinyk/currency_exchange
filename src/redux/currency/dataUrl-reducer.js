export const UPDATE_DATA = "UPDATE_DATA";

export function updateData(url) {
  return {
    type: UPDATE_DATA,
    payload: url,
  };
}

export const updateDataReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.payload;
    default:
      return state;
  }
};
