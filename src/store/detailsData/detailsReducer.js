import {
  GET_DETAILS_DATA,
  GET_DETAILS_DATA_SUCCESS,
  GET_DETAILS_DATA_FAILURE,
} from "./actions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_DATA:
      return {
        ...state,
        loading: true,
      };

    case GET_DETAILS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_DETAILS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
