import { useState } from "react";

export const withPage = (Component) => {
  return function (props) {
    const [page, setPage] = useState("1");
    return <Component active={page} onChange={setPage} {...props} />;
  };
};
