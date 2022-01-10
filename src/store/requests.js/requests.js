export const getDataRequest = async (resource, options) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${resource}api_key=a7b00b84862e879a59ef9a06c90897ec${options}`
  );
  const result = await response.json();
  return result;
};
