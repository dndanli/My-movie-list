import express from "express";
import { fetchPopularMedia } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /popular
 */
router.get("/:mediaType", async (request, response) => {
  response.send(await fetchPopularMedia(request.params.mediaType));
});

export default router;
