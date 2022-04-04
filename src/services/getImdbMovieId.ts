import axios from "axios";

const control = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error! API timeout reached");
    }, 1000);
  });
};

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

  let id;

  await Promise.race([control(), axios.request(options)])
    .then((response) => {
      id = response.data.results[0];
    })
    .catch((error) => {
      console.error(error);
    });

  return id;
}

export { getImdbMovieId };
