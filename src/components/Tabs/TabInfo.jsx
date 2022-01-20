import { TabItem, TabBG, InfoIcon, MovieInfo } from "../../styles/tab";
import { SliderRating } from "../../styles/carousel";
import { useSelector } from "react-redux";
import { SmallTitle, SmallText } from "../../styles/text";
import { AiOutlineStar } from "react-icons/ai";

export const TabInfo = ({ item }) => {
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
    <li>
      <TabItem
        key={item.id}
        to={{ pathname: "/Details", search: `id=${item.id}` }}
      >
        <TabBG
          img={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w780${item.poster_path}`
              : null
          }
        >
          <InfoIcon />
          <MovieInfo>
            <SmallTitle>{item.title}</SmallTitle>
            {item.overview && <SmallText>{strSlice(item.overview)}</SmallText>}
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
    </li>
  );
};
