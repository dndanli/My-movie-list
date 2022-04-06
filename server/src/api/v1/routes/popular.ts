import express from "express";
import { fetchPopularMovies } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /popular
 */
router.get("/", async (request, response) => {
  response.send(await fetchPopularMovies());
});

export default router;
