import { Carousel } from "../Carousel/Carousel";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Navigation />
      <Outlet />
    </>
  );
};
