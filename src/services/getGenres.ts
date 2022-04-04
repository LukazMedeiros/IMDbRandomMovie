import axios from "axios";

const control = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error! API timeout reached");
    }, 1000);
  });
};

async function getGenres() {
  const options: any = {
    method: "GET",
    url: "https://data-imdb1.p.rapidapi.com/titles/utils/genres",
    headers: {
      "X-RapidAPI-Host": "data-imdb1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  };

  let genres;

  await Promise.race([control(), axios.request(options)])
    .then((response) => {
      const genresAPI = response.data.results;

      genres = genresAPI.filter((genre: string) => {
        if (genre) {
          return genre;
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return genres;
}

export { getGenres };
