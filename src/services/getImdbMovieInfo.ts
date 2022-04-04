import axios from "axios";

const control = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error! API timeout reached");
    }, 1000);
  });
};

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

  let movieData;

  await Promise.race([control(), axios.request(options)])
    .then((response) => {
      if (!response.data) {
        movieData = null;
      }

      movieData = response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  return movieData;
}

export { getImbdMovieInfo };
