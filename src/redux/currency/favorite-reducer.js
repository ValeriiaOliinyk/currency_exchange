export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

export function addFavorite(text) {
  return {
    type: ADD_FAV,
    payload: text,
  };
}

export function deleteFavorite(text) {
  return {
    type: DELETE_FAV,
    payload: text,
  };
}

export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, action.payload];
    case DELETE_FAV:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};
