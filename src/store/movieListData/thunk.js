import {
  getMoviesData,
  getMoviesDataSuccesss,
  getMoviesDataFailure,
} from "../movieListData/movieListAction";
import { getDataRequest } from "../requests.js/requests";

export const getMoviesRequest = (resource) => async (dispatch) => {
  dispatch(getMoviesData());
  try {
    const result = await getDataRequest(resource);
    dispatch(getMoviesDataSuccesss(result));
  } catch (e) {
    dispatch(getMoviesDataFailure(e));
  }
};
