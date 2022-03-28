import { Request, Response } from "express";
import { getGenres } from "../services/getGenres";

async function renderHome(request: Request, response: Response) {
  const year = new Date().getFullYear();
  const genres = await getGenres();
  return response.render("index", { year, genres });
}

export { renderHome };
