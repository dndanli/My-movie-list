import express from "express";
import { fetchTopRatedMovies } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /topRated
 */
router.get("/", async (request, response) => {
  response.send(await fetchTopRatedMovies());
});

export default router;
