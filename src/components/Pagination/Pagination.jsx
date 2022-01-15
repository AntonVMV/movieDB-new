import { useSelector } from "react-redux";

export const Pagination = ({ active, onChange }) => {
  const { pages } = useSelector((store) => store.movieListReducer);

  const setPagesNum = () => {};

  return (
    <div>
      <p onClick={() => onChange(1)}>1</p>
      <p onClick={() => onChange(2)}>2</p>
      <p onClick={() => onChange(3)}>3</p>
      <p onClick={() => onChange(4)}>4</p>
      <p onClick={() => onChange(5)}>5</p>
    </div>
  );
};
