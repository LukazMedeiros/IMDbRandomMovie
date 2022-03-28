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

  if (!data) {
    return response.json({ error: "filme nao encontrado" });
  }

  const movieInfo = await getImbdMovieInfo(data.id);

  if (!movieInfo) {
    return response.json({ error: "filme nao encontrado" });
  }

  const actors = movieInfo.actors.map((actor) => {
    return actor.name;
  });

  return response.render("movie", { movieInfo, actors });
}

export { getMovie };
