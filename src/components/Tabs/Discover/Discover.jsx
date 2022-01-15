import { TabContent } from "../TabContent";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Select } from "../../Select/Select";
import { FiltersContainer } from "../../../styles/components";
import { useEffect } from "react";
import { getMoviesRequest } from "../../../store/movieListData/thunk";
import { Pagination } from "../../Pagination/Pagination";
import { withPage } from "../../../hoc/WithPage";

const sortTypes = [
  { name: "Release Date", id: "release_date.desc" },
  { name: "Rating", id: "vote_average.desc" },
  { name: "Popularity", id: "popularity.desc" },
];

const Discover = (props) => {
  const dispatch = useDispatch();
  const { genres } = useSelector((store) => store.genresListReducer);
  const [fields, setFields] = useState({
    with_genres: "",
    primary_release_year: "",
    sort_by: "",
  });

  useEffect(() => {
    let url =
      "discover/movie?&language=en-US&page=1&with_watch_monetization_types=flatrate&vote_count.gte=5&include_adult=false&include_video=false";
    for (let item in fields) {
      if (fields[item]) {
        url = url.concat(`&${item}=${fields[item]}`);
      }
    }

    dispatch(getMoviesRequest(url));
  }, [fields]);

  const setValue = (item, key) => {
    setFields({ ...fields, [key]: item });
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    let startYear = 1920;
    const years = [];
    while (startYear <= currentYear) {
      years.push({ name: startYear, id: startYear });
      startYear++;
    }
    return years.reverse();
  };

  return (
    <TabContent>
      <Pagination active={props.active} onChange={props.onChange} />
      {genres && (
        <FiltersContainer>
          <Select
            options={genres}
            onChange={(item) => setValue(item, "with_genres")}
            label={"Genre:"}
          />
          <Select
            options={generateYears()}
            onChange={(item) => setValue(item, "primary_release_year")}
            label={"Year:"}
          />
          <Select
            options={sortTypes}
            onChange={(item) => setValue(item, "sort_by")}
            label={"Sort:"}
          />
        </FiltersContainer>
      )}
    </TabContent>
  );
};

export const DiscoverWithPages = withPage(Discover);
