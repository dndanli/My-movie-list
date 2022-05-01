import express from "express";
import { fetchTrailer } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /getIdForTrailer
 */
let movieId: number;

router.post("/", (request, response) => {
  movieId = request.body.id;
  response.end();
});

router.get("/trailer", async (request, response) => {
  const trailerData = await fetchTrailer(movieId);
  response.send(trailerData);
});

export default router;
