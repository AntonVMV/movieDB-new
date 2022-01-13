import { combineReducers } from "redux";
import { carouselReducer } from "./carouselData/carouselReducer";
import { movieListReducer } from "./movieListData/movieListReducer";
import { genresListReducer } from "./genresData/genresReducer";

export const reducer = combineReducers({
  carouselReducer,
  movieListReducer,
  genresListReducer,
});
