export const GET_MOVIES_DATA = "GET_MOVIES_DATA";
export const GET_MOVIES_DATA_SUCCESS = "GET_MOVIES_DATA_SUCCESS";
export const GET_MOVIES_DATA_FAILURE = "GET_MOVIES_DATA_FAILURE";

export const getMoviesData = () => ({
  type: GET_MOVIES_DATA,
});

export const getMoviesDataSuccesss = (payload) => ({
  type: GET_MOVIES_DATA_SUCCESS,
  payload,
});

export const getMoviesDataFailure = (payload) => ({
  type: GET_MOVIES_DATA_FAILURE,
  payload,
});
