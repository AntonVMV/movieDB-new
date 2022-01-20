import { DetailsContainer } from "../../../styles/containers";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsRequest } from "../../../store/detailsData/thunk";
import { useQueryParams } from "../../../hook/useQueryParams";
import { MedTitle, SmallTitle, SmallText } from "../../../styles/text";
import { MovieDetails } from "./MovieDetails";
import { AboutItem } from "../../../styles/detailsPage";
import { MovieCast } from "./MovieCast";
import { VideoModal } from "../../Modal/VideoModal";
import { LoadingBlock } from "../../../styles/components";

export const Details = () => {
  const dispatch = useDispatch();
  const [search] = useQueryParams("id");
  const { data, loading } = useSelector((store) => store.detailsReducer);

  useEffect(() => {
    dispatch(
      getDetailsRequest(
        `movie/${search}?&language=en-US&append_to_response=videos,credits,images&include_image_language=en,null`
      )
    );
  }, []);

  if (loading) {
    return <LoadingBlock />;
  }

  return (
    <DetailsContainer>
      {data && (
        <>
          <MedTitle>{data.title}</MedTitle>
          <MovieDetails data={data} />
          {data.overview && (
            <AboutItem>
              <SmallTitle>About:</SmallTitle>
              <SmallText>{data.overview}</SmallText>
            </AboutItem>
          )}
          <MovieCast cast={data.credits.cast} />
          <VideoModal video={data.videos.results[0]} />
        </>
      )}
    </DetailsContainer>
  );
};
