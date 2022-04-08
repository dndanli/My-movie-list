import express from "express";
import { fetchMovieData } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /detail
 */
let movieId: number;
router.post("/getMovieId", async (request, response) => {
  movieId = request.body.id;
});

router.get("/getMovieData", async (request, response) => {
  const movieData = await fetchMovieData(movieId);
  response.send(movieData);
  response.end();
});

export default router;
