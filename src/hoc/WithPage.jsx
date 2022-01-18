import { useState, useEffect } from "react";
import { useQueryParams } from "../hook/useQueryParams";

export const withPage = (Component) => {
  return function (props) {
    const [paramValue, setValue] = useQueryParams("page");

    return <Component active={paramValue || 1} {...props} />;
  };
};
