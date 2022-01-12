import { useSelector } from "react-redux";
import { ContainerL } from "../../styles/containers";
import { TabList, TabItem, TabInfo } from "../../styles/tab";
import { ButtonOk } from "../../styles/components";
import { MedTitle } from "../../styles/text";

export const TabContent = () => {
  const { data } = useSelector((store) => store.movieListReducer);

  const strSlice = (str) => {
    return str.length > 300 ? str.slice(0, 350) + ". . ." : str;
  };

  return (
    <ContainerL>
      <TabList>
        {data &&
          data.map((item) => {
            return (
              <TabItem
                key={item.id}
                img={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              >
                <TabInfo>
                  <MedTitle>{item.title}</MedTitle>
                  {item.overview && <p>{strSlice(item.overview)}</p>}

                  <p>
                    Release: <b>{item.release_date}</b>
                  </p>
                  <ButtonOk>Continue</ButtonOk>
                </TabInfo>
              </TabItem>
            );
          })}
      </TabList>
    </ContainerL>
  );
};
