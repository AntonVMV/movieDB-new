import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { Pagination } from "../../Pagination/Pagination";
import { withPage } from "../../../hoc/WithPage";

const Latest = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMoviesRequest(
        `discover/movie?language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${props.active}&with_watch_monetization_types=flatrate&vote_count.gte=5`
      )
    );
  }, [props.active]);

  return (
    <>
      <TabContent>
        <Pagination active={props.active} onChange={props.onChange} />
        <div></div>
      </TabContent>
    </>
  );
};

export const LatestWithPages = withPage(Latest);
