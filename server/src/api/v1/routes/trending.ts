import express from "express";
import { fetchTrending } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /nowPlaying
 */
router.get("/", async (request, response) => {
  response.send(await fetchTrending());
});

export default router;
