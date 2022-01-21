import { SmallTitle, SmallText } from "../../../styles/text";
import {
  BlockContainer,
  RecContainer,
  RecCard,
  RecImg,
} from "../../../styles/detailsPage";

export const Recommendations = ({ data }) => {
  return (
    <BlockContainer>
      <SmallTitle>Recommendations:</SmallTitle>
      <RecContainer>
        {data.total_results ? (
          data.results.map((item) => {
            return (
              <RecCard
                to={{ pathname: "/Details", search: `id=${item.id}` }}
                key={item.id}
              >
                <RecImg
                  img={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : null
                  }
                />
                <SmallText>
                  <b>{item.title}</b>
                </SmallText>
              </RecCard>
            );
          })
        ) : (
          <p>No recomendation</p>
        )}
      </RecContainer>
    </BlockContainer>
  );
};
