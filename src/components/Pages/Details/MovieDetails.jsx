import React from "react";
import {
  InfoContainer,
  PosterImg,
  Information,
  InformationItem,
  SideContainer,
  VideoContainer,
  TrailerImage,
  PlayImg,
} from "../../../styles/detailsPage";
import { XSmallText, SmallText, SmallTitle } from "../../../styles/text";
import { useState } from "react";
import { VideoModal } from "../../Modal/VideoModal";

export const MovieDetails = ({ data }) => {
  const [modalVideo, setModalVideo] = useState("");

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
            {getTrailers().length > 0 ? (
              getTrailers().map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <TrailerImage
                      onClick={() => setModalVideo(item.key)}
                      url={`https://img.youtube.com/vi/${item.key}/0.jpg`}
                      alt="Video preview"
                    >
                      <PlayImg />
                    </TrailerImage>
                  </React.Fragment>
                );
              })
            ) : (
              <SmallText>No Video</SmallText>
            )}
          </VideoContainer>
        </SideContainer>
        <VideoModal
          isOpen={modalVideo}
          onClose={() => setModalVideo(false)}
          video={modalVideo}
        />
      </InfoContainer>
    </>
  );
};
