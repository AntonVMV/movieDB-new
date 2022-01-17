import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "../Select";
import { useQueryParams } from "../../../hook/useQueryParams";

/*Select. filter by genre*/

export const GenreFilter = () => {
  const { genres } = useSelector((store) => store.genresListReducer);
  const [genre, setGenre] = useState({ with_genres: "" });
  const [paramValue, setValue] = useQueryParams("with_genres");

  useEffect(() => {
    if (genre.with_genres) {
      setValue(genre.with_genres);
    }
  }, [genre]);

  const getActiveName = () => {
    return genres.find((item) => item.id === parseInt(paramValue))?.name;
  };

  return (
    <>
      {genres && (
        <Select
          active={getActiveName()}
          options={genres}
          onChange={(item) => setGenre({ with_genres: item })}
          label={"Genre:"}
        />
      )}
    </>
  );
};

/*Select. filter by release year*/

export const YearFilter = () => {
  const [year, setYear] = useState({ primary_release_year: "" });
  const [paramValue, setValue] = useQueryParams("primary_release_year");

  useEffect(() => {
    if (year.primary_release_year) {
      setValue(year.primary_release_year);
    }
  }, [year]);

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
    <Select
      active={paramValue}
      options={generateYears()}
      onChange={(item) => setYear({ primary_release_year: item })}
      label={"Year:"}
    />
  );
};

/*Select. filter by sort option*/

export const SortFilter = () => {
  const [sort, setSort] = useState({ sort_by: "" });
  const [paramValue, setValue] = useQueryParams("sort_by");

  useEffect(() => {
    if (sort.sort_by) {
      setValue(sort.sort_by);
    }
  }, [sort]);

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
      onChange={(item) => setSort({ sort_by: item })}
      label={"Sort:"}
    />
  );
};
