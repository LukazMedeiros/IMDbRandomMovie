import axios from "axios";

async function getImdbMovieId(genre: string, year: number) {
  const randomPage = Math.floor(Math.random() * (500 - 1) + 1);

  const options: any = {
    method: "GET",
    url: "https://data-imdb1.p.rapidapi.com/titles",
    params: {
      info: "mini_info",
      limit: "1",
      page: randomPage,
      titleType: "movie",
      genre,
      endYear: year,
    },
    headers: {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    },
  };

  const { data } = await axios.request(options);

  return data.results[0];
}

export { getImdbMovieId };
