import { TabsContent } from "../TabsContent";
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
    <TabsContent>
      <Pagination active={props.active} />
      <div></div>
    </TabsContent>
  );
};

export const TopRatedWithPages = withPage(TopRated);
