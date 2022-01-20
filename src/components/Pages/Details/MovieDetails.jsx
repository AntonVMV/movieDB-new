import {
  InfoContainer,
  PosterImg,
  Information,
  InformationItem,
  SideContainer,
  VideoContainer,
} from "../../../styles/detailsPage";
import { XSmallText, SmallText, SmallTitle } from "../../../styles/text";

export const MovieDetails = ({ data }) => {
  const getCrew = (job) => {
    const result = data.credits.crew.reduce((acc, item) => {
      if (item.job === job) {
        acc.push(item.name);
      }
      return acc;
    }, []);
    return result.join(", ");
  };

  const getTrailers = () => {
    return data.videos.results.filter((item) => item.type === "Trailer");
  };

  return (
    <>
      <InfoContainer>
        <PosterImg
          img={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w780${data.poster_path}`
              : null
          }
        />

        <Information>
          <InformationItem>
            <XSmallText>Data</XSmallText>
            <SmallText>{data.release_date}</SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Tag</XSmallText>
            <SmallText>{data.tagline}</SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Genres</XSmallText>
            <SmallText>
              {data.genres.map((item) => item.name).join(", ")}
            </SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Director</XSmallText>
            <SmallText>{getCrew("Director")}</SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Producer</XSmallText>
            <SmallText>{getCrew("Producer")}</SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Screenplay</XSmallText>
            <SmallText>{getCrew("Screenplay")}</SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Composer</XSmallText>
            <SmallText>{getCrew("Original Music Composer")}</SmallText>
          </InformationItem>

          <InformationItem>
            <XSmallText>Director of Photography</XSmallText>
            <SmallText>{getCrew("Director of Photography")}</SmallText>
          </InformationItem>
        </Information>

        <SideContainer>
          <SmallTitle>Video:</SmallTitle>
          <VideoContainer>
            {getTrailers().map((item) => {
              return (
                <img
                  src={`https://img.youtube.com/vi/${item.key}/0.jpg`}
                  alt="Video preview"
                />
              );
            })}
          </VideoContainer>
        </SideContainer>
      </InfoContainer>
    </>
  );
};
