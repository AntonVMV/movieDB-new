import {
  GET_GENRES_DATA,
  GET_GENRES_DATA_SUCCESS,
  GET_GENRES_DATA_FAILURE,
} from "./actions";

const initialState = {
  genres: null,
  loading: false,
  error: null,
};

export const genresListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES_DATA:
      return {
        ...state,
        loading: true,
      };

    case GET_GENRES_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.payload,
      };

    case GET_GENRES_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
