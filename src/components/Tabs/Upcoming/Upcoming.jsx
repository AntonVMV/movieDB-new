import { TabsContent } from "../TabsContent";
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
    <TabsContent>
      <Pagination active={props.active} />
      <div></div>
    </TabsContent>
  );
};

export const UpcomingWithPages = withPage(Upcoming);
