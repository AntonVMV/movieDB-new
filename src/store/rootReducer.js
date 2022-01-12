import { combineReducers } from "redux";
import { carouselReducer } from "./carouselData/carouselReducer";
import { movieListReducer } from "./movieListData/movieListReducer";

export const reducer = combineReducers({
  carouselReducer,
  movieListReducer,
});
