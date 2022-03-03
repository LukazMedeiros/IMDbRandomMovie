import dotenv from "dotenv";
import express from "express";
import path from "path";
import { route } from "./routes";

dotenv.config();

const server = express();
server.use(express.json());

server.set("view engine", "ejs");
server.use(express.static("public"));
server.set("views", path.resolve(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));
server.use(route);

server.listen(process.env.PORT, () => {
  console.log(`servidor rodando na porta ${process.env.PORT}`);
});
