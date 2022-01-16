import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { Pagination } from "../../Pagination/Pagination";
import { withPage } from "../../../hoc/WithPage";

const TopRated = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMoviesRequest(`movie/top_rated?anguage=en-US&page=${props.active}`)
    );
  }, [props.active]);

  return (
    <TabContent>
      <Pagination active={props.active} onChange={props.onChange} />
      <div></div>
    </TabContent>
  );
};

export const TopRatedWithPages = withPage(TopRated);
