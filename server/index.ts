import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import path from "path";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/search/:title", (req: Request, res: Response) => {
  console.log("get111", req.url);
  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: process.env.MOVIES_API_KEY,
        page: 1,
        query: req.params.title,
      },
    })
    .then((response) => {
      let newMovies = response.data.results
        .map((movie: any, i: number) => {
          return { ...movie, watched: false, trueIndex: i, display: false };
        })
        .filter((movie: any) => {
          return movie.poster_path;
        });
      console.log(newMovies);
      res.status(200).send(newMovies);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.listen(process.env.PORT);
