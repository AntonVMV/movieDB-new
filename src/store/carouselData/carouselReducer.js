import {
  GET_CAROUSEL_DATA,
  GET_CAROUSEL_DATA_SUCCESS,
  GET_CAROUSEL_DATA_FAILURE,
} from "./actions";

const initialState = {
  movies: null,
  loading: false,
  error: null,
};

export const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL_DATA:
      return {
        ...state,
        loading: true,
      };

    case GET_CAROUSEL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case GET_CAROUSEL_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
