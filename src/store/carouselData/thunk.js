import {
  getCarouselData,
  getCarouselDataSuccesss,
  getCarouselDataFailure,
} from "./actions";
import { getDataRequest } from "../requests.js/requests";

export const getCarouselRequest = () => async (dispatch) => {
  dispatch(getCarouselData());
  try {
    const result = await getDataRequest(
      "movie/now_playing?language=en-US&page=1&region=US"
    );
    dispatch(getCarouselDataSuccesss(result.results));
  } catch (e) {
    dispatch(getCarouselDataFailure(e));
  }
};
