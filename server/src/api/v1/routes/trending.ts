import express from "express";
import { fetchTrending } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /trending
 */
router.get("/:mediaType", async (request, response) => {
  response.send(await fetchTrending(request.params.mediaType));
});

export default router;
