import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";

export const TopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesRequest("movie/top_rated?anguage=en-US&page=1"));
  }, []);

  return <TabContent></TabContent>;
};
