import {
  GET_MOVIES_DATA,
  GET_MOVIES_DATA_SUCCESS,
  GET_MOVIES_DATA_FAILURE,
} from "./movieListAction";

const initialState = {
  data: null,
  pages: 0,
  loading: false,
  error: null,
};

export const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_DATA:
      return {
        ...state,
        loading: true,
      };

    case GET_MOVIES_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        pages: action.payload.total_pages,
      };

    case GET_MOVIES_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
