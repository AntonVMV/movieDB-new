import { useQueryParams } from "../../../hook/useQueryParams";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { withPage } from "../../../hoc/WithPage";
import { Pagination } from "../../Pagination/Pagination";
import { TabsContent } from "../../Tabs/TabsContent";
import { SearchResultsHeader } from "../../../styles/containers";
import { MedTitle, MedText } from "../../../styles/text";

const Search = (props) => {
  const [search] = useQueryParams("for");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMoviesRequest(
        `search/movie?query=${search}&language=en-US&page=${props.active}&include_adult=false`
      )
    );
  }, [props.active, search]);

  return (
    <>
      <TabsContent>
        <Pagination active={props.active} />
        <SearchResultsHeader>
          <MedText>Search results for</MedText>
          <MedTitle>"{search}"</MedTitle>
        </SearchResultsHeader>
      </TabsContent>
    </>
  );
};

export const SearchWithPages = withPage(Search);
