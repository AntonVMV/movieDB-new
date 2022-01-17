import { useState, useEffect } from "react";
import { useQueryParams } from "../hook/useQueryParams";

export const withPage = (Component) => {
  return function (props) {
    const [page, setPage] = useState("1");
    const [paramValue, setValue] = useQueryParams("page");

    useEffect(() => {
      setValue(page);
    }, [page]);

    return <Component active={paramValue} onChange={setPage} {...props} />;
  };
};
