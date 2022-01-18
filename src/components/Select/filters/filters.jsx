import { useSelector } from "react-redux";
import { Select } from "../Select";
import { useQueryParams } from "../../../hook/useQueryParams";

/*Select. filter by genre*/

export const GenreFilter = () => {
  const { genres } = useSelector((store) => store.genresListReducer);
  const [paramValue] = useQueryParams("with_genres");

  const getActiveName = () => {
    return genres.find((item) => item.id === parseInt(paramValue))?.name;
  };

  return (
    <>
      {genres && (
        <Select
          active={getActiveName()}
          options={genres}
          label={"Genre"}
          query="with_genres"
        />
      )}
    </>
  );
};

/*Select. filter by release year*/

export const YearFilter = () => {
  const [paramValue] = useQueryParams("primary_release_year");

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

  console.log(paramValue);

  return (
    <Select
      active={paramValue}
      options={generateYears()}
      label={"Year"}
      query="primary_release_year"
    />
  );
};

/*Select. filter by sort option*/

export const SortFilter = () => {
  const [paramValue] = useQueryParams("sort_by");

  const sortTypes = [
    { name: "Release Date", id: "release_date.desc" },
    { name: "Rating", id: "vote_average.desc" },
    { name: "Popularity", id: "popularity.desc" },
  ];

  const getActiveName = () => {
    return sortTypes.find((item) => item.id === paramValue)?.name;
  };

  return (
    <Select
      active={getActiveName()}
      options={sortTypes}
      label={"Sort"}
      query="sort_by"
    />
  );
};
