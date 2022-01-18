import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { Pagination } from "../../Pagination/Pagination";
import { withPage } from "../../../hoc/WithPage";

const Upcoming = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMoviesRequest(`movie/upcoming?language=en-US&page=${props.active}`)
    );
  }, [props.active]);

  return (
    <TabContent>
      <Pagination active={props.active} />
      <div></div>
    </TabContent>
  );
};

export const UpcomingWithPages = withPage(Upcoming);
