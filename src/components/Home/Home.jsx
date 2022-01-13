import { Carousel } from "../Carousel/Carousel";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getGenresRequest } from "../../store/genresData/thunk";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresRequest());
  }, []);

  return (
    <>
      <Carousel />
      <Navigation />
      <Outlet />
    </>
  );
};
