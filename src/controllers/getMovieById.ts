import { Request, Response } from "express";
import { getImbdMovieInfo } from "../services/getImdbMovieInfo";

async function getMovieById(request: Request, response: Response) {
  const { id } = request.params;

  if (!id) {
    throw new Error("Movie ID must be informed");
  }

  const movieInfo = await getImbdMovieInfo(id);

  if (!movieInfo) {
    return response.json({ error: "filme nao encontrado" });
  }

  const actors = movieInfo.actors.map((actor) => {
    return actor.name;
  });

  return response.render("movie", { movieInfo, actors });
}

export { getMovieById };
