import {
  getDetailsData,
  getDetailsDataSuccesss,
  getDetailsDataFailure,
} from "./actions";
import { getDataRequest } from "../requests.js/requests";

export const getDetailsRequest = (options) => async (dispatch) => {
  dispatch(getDetailsData());
  try {
    const result = await getDataRequest(options);
    dispatch(getDetailsDataSuccesss(result));
  } catch (e) {
    dispatch(getDetailsDataFailure(e));
  }
};
