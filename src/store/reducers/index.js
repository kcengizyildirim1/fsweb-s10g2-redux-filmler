import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { favoritesReducer } from "./favoritiesReducer";

export const reducers = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});
