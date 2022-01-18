import { useQueryParams } from "../../../hook/useQueryParams";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { withPage } from "../../../hoc/WithPage";
import { Pagination } from "../../Pagination/Pagination";
import { TabContent } from "../../Tabs/TabContent";

const Search = (props) => {
  const [search] = useQueryParams("for");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesRequest(``));
  }, [props.active, search]);

  console.log(search);

  return (
    <>
      <TabContent>
        <Pagination active={props.active} />
        <div style={{ padding: "300px" }}>NO RESULTS</div>
      </TabContent>
    </>
  );
};

export const SearchWithPages = withPage(Search);
