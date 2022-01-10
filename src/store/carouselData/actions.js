export const GET_CAROUSEL_DATA = "GET_CAROUSEL_DATA";
export const GET_CAROUSEL_DATA_SUCCESS = "GET_CAROUSEL_DATA_SUCCESS";
export const GET_CAROUSEL_DATA_FAILURE = "GET_CAROUSEL_DATA_FAILURE";

export const getCarouselData = () => ({
  type: GET_CAROUSEL_DATA,
});

export const getCarouselDataSuccesss = (payload) => ({
  type: GET_CAROUSEL_DATA_SUCCESS,
  payload,
});

export const getCarouselDataFailure = (payload) => ({
  type: GET_CAROUSEL_DATA_FAILURE,
  payload,
});
