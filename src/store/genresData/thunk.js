import {
  getGenresData,
  getGenresDataSuccesss,
  getGenresDataFailure,
} from "./actions";
import { getDataRequest } from "../requests.js/requests";

export const getGenresRequest = () => async (dispatch) => {
  dispatch(getGenresData());
  try {
    const result = await getDataRequest("genre/movie/list?&language=en-US");
    dispatch(getGenresDataSuccesss(result.genres));
  } catch (e) {
    dispatch(getGenresDataFailure(e));
  }
};
