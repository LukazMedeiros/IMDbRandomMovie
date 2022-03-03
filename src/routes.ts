import { Router } from "express";
import { getMovie } from "./controllers/getMovie";
import { renderHome } from "./controllers/renderHome";

const route = Router();

route.get("/", renderHome);

route.get("/movies", getMovie);

export { route };
