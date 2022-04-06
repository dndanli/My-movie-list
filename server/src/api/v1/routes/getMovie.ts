import express from "express";
import axios from "axios";
import { fetchTrailer } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /getMovie
 */
let movieId: number;

router.post("/", async (request, response, next) => {
  movieId = request.body.id;
});

router.get("/trailer", async (request, response) => {
  const trailerData = await fetchTrailer(movieId);
  response.send(trailerData);
});

export default router;
