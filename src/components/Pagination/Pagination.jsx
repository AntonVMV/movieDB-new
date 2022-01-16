import { useSelector } from "react-redux";
import {
  PaginationContainer,
  PaginationElement,
} from "../../styles/components";

export const Pagination = ({ active, onChange }) => {
  const { pages } = useSelector((store) => store.movieListReducer);
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

  setPagesNum();

  return (
    <PaginationContainer>
      {pages &&
        setPagesNum().map((item, index) => {
          return (
            <PaginationElement
              key={index}
              onClick={typeof item === "number" ? () => onChange(item) : null}
              isPage={typeof item === "number"}
            >
              {item}
            </PaginationElement>
          );
        })}
    </PaginationContainer>
  );
};
