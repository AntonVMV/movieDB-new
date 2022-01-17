import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { FiltersContainer } from "../../../styles/components";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { Pagination } from "../../Pagination/Pagination";
import { withPage } from "../../../hoc/WithPage";
import {
  GenreFilter,
  YearFilter,
  SortFilter,
} from "../../Select/filters/filters";
import { useSearchParams } from "react-router-dom";

const Discover = (props) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let url = `discover/movie?&language=en-US&page=${props.active}&with_watch_monetization_types=flatrate&vote_count.gte=5&include_adult=false&include_video=false`;
    for (let [key, value] of searchParams.entries()) {
      url += `&${key}=${value}`;
    }
    dispatch(getMoviesRequest(url));
  }, [searchParams]);

  return (
    <TabContent>
      <Pagination active={props.active} onChange={props.onChange} />
      <FiltersContainer>
        <GenreFilter />
        <YearFilter />
        <SortFilter />
      </FiltersContainer>
    </TabContent>
  );
};

export const DiscoverWithPages = withPage(Discover);
