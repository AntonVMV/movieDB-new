export const GET_GENRES_DATA = "GET_GENRES_DATA";
export const GET_GENRES_DATA_SUCCESS = "GET_GENRES_DATA_SUCCESS";
export const GET_GENRES_DATA_FAILURE = "GET_GENRES_DATA_FAILURE";

export const getGenresData = () => ({
  type: GET_GENRES_DATA,
});

export const getGenresDataSuccesss = (payload) => ({
  type: GET_GENRES_DATA_SUCCESS,
  payload,
});

export const getGenresDataFailure = (payload) => ({
  type: GET_GENRES_DATA_FAILURE,
  payload,
});
