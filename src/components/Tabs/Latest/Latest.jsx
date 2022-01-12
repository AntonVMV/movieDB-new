import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";

export const Latest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMoviesRequest(
        "discover/movie?language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_count.gte=5"
      )
    );
  }, []);

  return <TabContent></TabContent>;
};
