const getDataApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.map((item) => {
        return {
          movie: item.movie,
          poster: item.poster,
          line: item.full_line,
          year: item.year,
          director: item.director,
          audio: item.audio,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getDataApi;
