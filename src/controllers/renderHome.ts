import { Request, Response } from "express";

async function renderHome(request: Request, response: Response) {
  return response.render("index");
}

export { renderHome };
