import { Request, Response } from "express";
import { getImdbMovieId } from "../services/getImdbMovieId";
import { getImbdMovieInfo } from "../services/getImdbMovieInfo";

const currentYear = new Date().getFullYear();

async function getMovie(request: Request, response: Response) {
  const { genre, year } = request.query;

  if (Number(year) < 1895 || Number(year) > currentYear) {
    return response
      .status(400)
      .json({ status: "error", message: "Invalid year input" });
  }

  if (!genre) {
    return response
      .status(400)
      .json({ status: "error", message: "A genre must be entered" });
  }

  const data = await getImdbMovieId(genre, year);

  console.log("id retornado ", data.id);
  console.log("poster url ", data.primaryImage.url);

  const movieInfo = await getImbdMovieInfo(data.id);

  return response.json(movieInfo);

  // return response.render("index", { data: movieInfo });
}

export { getMovie };
