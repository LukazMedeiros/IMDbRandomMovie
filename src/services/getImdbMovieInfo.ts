import axios from "axios";

async function getImbdMovieInfo(id: string) {
  const options: any = {
    method: "GET",
    url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
    params: { id },
    headers: {
      "x-rapidapi-host": "movie-details1.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    },
  };

  const { data } = await axios.request(options);

  if (!data) {
    return null;
  }

  return data;
}

export { getImbdMovieInfo };
