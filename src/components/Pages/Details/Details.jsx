import { DetailsContainer } from "../../../styles/containers";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsRequest } from "../../../store/detailsData/thunk";
import { useQueryParams } from "../../../hook/useQueryParams";
import {
  PosterImg,
  InfoContainer,
  Information,
} from "../../../styles/detailsPage";

export const Details = () => {
  const dispatch = useDispatch();
  const [search] = useQueryParams("id");
  const { data } = useSelector((store) => store.detailsReducer);

  useEffect(() => {
    dispatch(
      getDetailsRequest(
        `movie/${search}?&language=en-US&append_to_response=videos,credits`
      )
    );
  }, []);

  console.log(data);

  return (
    <DetailsContainer>
      <InfoContainer>
        <PosterImg
          img={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w780${data.poster_path}`
              : null
          }
        />
        <Information>
          <li>Title</li>
          <li>Name</li>
          <li>Tagline</li>
          <li>Genres</li>
          <li>Director</li>
          <li>Producer</li>
          <li>Screenplay</li>
          <li>Original Music Composer</li>
          <li>Director of Photography</li>
        </Information>
      </InfoContainer>
    </DetailsContainer>
  );
};
