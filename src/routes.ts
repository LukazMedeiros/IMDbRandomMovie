import { Router } from "express";
import { getMovie } from "./controllers/getMovie";
import { getMovieById } from "./controllers/getMovieById";
import { renderHome } from "./controllers/renderHome";

const route = Router();

route.get("/", renderHome);

route.get("/:id", getMovieById);

route.get("/movies", getMovie);

export { route };
