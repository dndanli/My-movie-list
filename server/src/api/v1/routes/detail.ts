import express from "express";
import { fetchMovieData } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /detail
 */

router.get("/getMovieData/:id", async (request, response) => {
  const movieData = await fetchMovieData(parseInt(request.params.id));
  response.send(movieData);
  response.end();
});

export default router;
