import { useSelector } from "react-redux";
import { useQueryParams } from "../../hook/useQueryParams";
import {
  PaginationContainer,
  PaginationElement,
} from "../../styles/components";

export const Pagination = ({ active }) => {
  const { pages } = useSelector((store) => store.movieListReducer);
  const [_, setSearch] = useQueryParams("page");

  let length = pages;

  if (pages > 100) {
    length = 100;
  }

  const setPagesNum = () => {
    if (pages <= 10) {
      const result = [];
      let i = 1;
      while (i <= pages) {
        result.push(i);
        i++;
      }
      return result;
    }

    const left = parseInt(active) - 2;
    const rigth = parseInt(active) + 2;
    const result = [];
    const pagesWithDots = [];
    let last;

    for (let i = 1; i <= length; i++) {
      if (i === 1 || i === length || (i >= left && i <= rigth)) {
        result.push(i);
      }
    }

    for (let i = 0; i < result.length; i++) {
      if (last) {
        if (result[i] - last > 1) {
          pagesWithDots.push("...");
        }
      }
      last = result[i];
      pagesWithDots.push(result[i]);
    }

    return pagesWithDots;
  };

  const pageHandle = (item) => {
    window.scrollTo({
      left: 0,
      top: 500,
      behavior: "smooth",
    });
    setSearch(item);
  };

  return (
    <PaginationContainer>
      {pages &&
        setPagesNum().map((item, index) => {
          return (
            <PaginationElement
              key={index}
              onClick={() => pageHandle(item)}
              isPage={typeof item === "number"}
              isActive={parseInt(active) === item}
            >
              {item}
            </PaginationElement>
          );
        })}
    </PaginationContainer>
  );
};
