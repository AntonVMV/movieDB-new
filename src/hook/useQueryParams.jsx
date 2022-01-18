import { useSearchParams } from "react-router-dom";

export const useQueryParams = (key) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key);

  let setValue = (value) => {
    if (value.toString() === paramValue) {
      return;
    }

    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);

    if (key !== "page") {
      newSearchParams.set("page", 1);
    }

    setSearchParams(newSearchParams);
  };

  return [paramValue, setValue];
};
