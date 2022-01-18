import { useSelector } from "react-redux";
import { ContainerL } from "../../styles/containers";
import {
  TabList,
  TabItem,
  MovieInfo,
  TabBG,
  InfoIcon,
  NoImgIcon,
} from "../../styles/tab";
import { SmallTitle, SmallText } from "../../styles/text";
import { SliderRating } from "../../styles/carousel";
import { AiOutlineStar } from "react-icons/ai";

export const TabContent = ({ children }) => {
  const { loading, data } = useSelector((store) => store.movieListReducer);
  const { genres } = useSelector((store) => store.genresListReducer);

  const strSlice = (str) => {
    return str.length > 230 ? str.slice(0, 230) + ". . ." : str;
  };

  const parseGenres = (ids) => {
    let result = [];
    ids.forEach((id) => {
      for (let genre of genres) {
        if (id === genre.id) {
          result.push(genre.name);
        }
      }
    });
    return result.join(", ");
  };

  return (
    <ContainerL>
      {children[1]}
      <TabList>
        {data &&
          data.map((item) => {
            return (
              <TabItem key={item.id}>
                <TabBG
                  img={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w780${item.poster_path}`
                      : null
                  }
                >
                  {!item.poster_path && <NoImgIcon />}
                  <InfoIcon />
                  <MovieInfo>
                    <SmallTitle>{item.title}</SmallTitle>
                    {item.overview && (
                      <SmallText>{strSlice(item.overview)}</SmallText>
                    )}
                    <p>{genres && parseGenres(item.genre_ids)}</p>
                    <SliderRating>
                      <AiOutlineStar />
                      {item.vote_average}
                    </SliderRating>

                    <p>
                      Release: <b>{item.release_date}</b>
                    </p>
                  </MovieInfo>
                </TabBG>

                <SmallTitle>{item.title}</SmallTitle>
              </TabItem>
            );
          })}
      </TabList>
      {children[0]}
    </ContainerL>
  );
};
