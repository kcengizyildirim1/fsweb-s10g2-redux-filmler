import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        favorites: [...state.favorites],
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      if (
        !state.favorites.find((favorite) => favorite.id === action.payload.id)
      )
        return {
          favorites: [...state.favorites, action.payload],
          displayFavorites: state.displayFavorites,
        };

      return state;
    case REMOVE_FAVORITE:
      return {
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
        displayFavorites: state.displayFavorites,
      };

    default:
      return state;
  }
};
