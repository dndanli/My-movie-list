import express from "express";
import { fetchUpcoming } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /upcoming
 */
router.get("/", async (request, response) => {
  response.send(await fetchUpcoming());
});

export default router;
