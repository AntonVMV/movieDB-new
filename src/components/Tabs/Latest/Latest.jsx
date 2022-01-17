import { TabContent } from "../TabContent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { Pagination } from "../../Pagination/Pagination";
import { withPage } from "../../../hoc/WithPage";
import { GenreFilter } from "../../Select/filters/filters";
import { FiltersContainer } from "../../../styles/components";
import { useQueryParams } from "../../../hook/useQueryParams";

const Latest = (props) => {
  const dispatch = useDispatch();
  const [value] = useQueryParams("with_genres");

  useEffect(() => {
    dispatch(
      getMoviesRequest(
        `discover/movie?language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${props.active}&with_watch_monetization_types=flatrate&vote_count.gte=5&with_genres=${value}`
      )
    );
  }, [props.active, value]);

  return (
    <>
      <TabContent>
        <Pagination active={props.active} onChange={props.onChange} />
        <FiltersContainer>
          <GenreFilter />
        </FiltersContainer>
      </TabContent>
    </>
  );
};

export const LatestWithPages = withPage(Latest);
