export const GET_DETAILS_DATA = "GET_DETAILS_DATA";
export const GET_DETAILS_DATA_SUCCESS = "GET_GENRES_DETAILS_SUCCESS";
export const GET_DETAILS_DATA_FAILURE = "GET_GENRES_DETAILS_FAILURE";

export const getDetailsData = () => ({
  type: GET_DETAILS_DATA,
});

export const getDetailsDataSuccesss = (payload) => ({
  type: GET_DETAILS_DATA_SUCCESS,
  payload,
});

export const getDetailsDataFailure = (payload) => ({
  type: GET_DETAILS_DATA_FAILURE,
  payload,
});
