import axios from "axios";

async function getImbdMovieInfo(id: string) {
  const options = {
    method: "GET",
    url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
    params: { id },
    headers: {
      "x-rapidapi-host": "movie-details1.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    },
  };

  const response = await axios.request(options);

  return response.data;
}

export { getImbdMovieInfo };
