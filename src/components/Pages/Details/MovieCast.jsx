import {
  ActorImg,
  ActorCard,
  ActorsContainer,
  BlockContainer,
} from "../../../styles/detailsPage";
import { SmallText, XSmallText, SmallTitle } from "../../../styles/text";

export const MovieCast = ({ cast }) => {
  return (
    <BlockContainer>
      <SmallTitle>Cast:</SmallTitle>

      <ActorsContainer>
        {cast.slice(0, 15).map((item) => {
          return (
            <ActorCard key={item.id} to="/">
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
    </BlockContainer>
  );
};
