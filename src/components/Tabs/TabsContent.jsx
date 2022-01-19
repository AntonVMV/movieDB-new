import { useSelector } from "react-redux";
import { ContentContainer } from "../../styles/containers";
import { TabInfo } from "./TabInfo";
import { TabList } from "../../styles/tab";
import { NoResultsContainer } from "../../styles/tab";
import { MedText, MedTitle } from "../../styles/text";

export const TabsContent = ({ children }) => {
  const { loading, data } = useSelector((store) => store.movieListReducer);

  if (loading) {
    return (
      <ContentContainer>
        <MedTitle>Loading...</MedTitle>
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      {children[1]}

      {data?.length === 0 && (
        <NoResultsContainer>
          <MedText>Sorry, nothing was found, try another request</MedText>
        </NoResultsContainer>
      )}

      {data?.length > 1 && (
        <TabList>
          {data.map((item) => {
            return <TabInfo key={item.id} item={item} />;
          })}
        </TabList>
      )}

      {data?.length > 1 && children[0]}
    </ContentContainer>
  );
};
