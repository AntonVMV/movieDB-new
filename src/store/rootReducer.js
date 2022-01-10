import { combineReducers } from "redux";
import { carouselReducer } from "./carouselData/carouselReducer";

export const reducer = combineReducers({
  carouselReducer,
});
