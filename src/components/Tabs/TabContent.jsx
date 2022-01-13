import { useSelector } from "react-redux";
import { ContainerL } from "../../styles/containers";
import { TabList, TabItem, MovieInfo, TabBG, InfoIcon } from "../../styles/tab";
import { MedTitle, SmallTitle } from "../../styles/text";
import { SliderRating } from "../../styles/carousel";
import { AiOutlineStar } from "react-icons/ai";

export const TabContent = () => {
  const { data } = useSelector((store) => store.movieListReducer);
  const { genres } = useSelector((store) => store.genresListReducer);

  const strSlice = (str) => {
    return str.length > 250 ? str.slice(0, 250) + ". . ." : str;
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
      <TabList>
        {data &&
          data.map((item) => {
            return (
              <TabItem key={item.id}>
                <TabBG
                  img={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
                >
                  <InfoIcon />
                  <MovieInfo>
                    <MedTitle>{item.title}</MedTitle>
                    {item.overview && <p>{strSlice(item.overview)}</p>}
                    <p>{genres && parseGenres(item.genre_ids)}</p>
                    <SliderRating>
                      <AiOutlineStar />
                      {item.vote_average}
                    </SliderRating>
                    <p></p>
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
    </ContainerL>
  );
};
