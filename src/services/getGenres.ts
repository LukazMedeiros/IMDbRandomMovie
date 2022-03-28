import axios from "axios";

async function getGenres() {
  const options = {
    method: "GET",
    url: "https://data-imdb1.p.rapidapi.com/titles/utils/genres",
    headers: {
      "X-RapidAPI-Host": "data-imdb1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  };

  const result = await axios.request(options);

  const genres = result.data.results.filter((genre: string) => {
    if (genre) {
      return genre;
    }
  });

  return genres;
}

export { getGenres };
