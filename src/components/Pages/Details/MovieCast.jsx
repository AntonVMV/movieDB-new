import {
  ActorImg,
  ActorCard,
  ActorsContainer,
  CastContainer,
} from "../../../styles/detailsPage";
import { SmallText, XSmallText, SmallTitle } from "../../../styles/text";

export const MovieCast = ({ cast }) => {
  return (
    <CastContainer>
      <SmallTitle>Cast:</SmallTitle>

      <ActorsContainer>
        {cast.slice(0, 15).map((item) => {
          return (
            <ActorCard key={item.id}>
              <ActorImg
                img={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : null
                }
              />
              <SmallText>
                <b>{item.name}</b>
              </SmallText>
              <XSmallText>{item.character}</XSmallText>
            </ActorCard>
          );
        })}
      </ActorsContainer>
    </CastContainer>
  );
};
