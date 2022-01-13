import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";

export const Upcoming = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesRequest("movie/upcoming?language=en-US&page=1"));
  }, []);

  return <TabContent></TabContent>;
};
