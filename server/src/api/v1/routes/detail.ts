import express from "express";
import { fetchMediaDetails } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /detail
 */

router.get("/getDetails/:mediaType/:id", async (request, response) => {
  const movieData = await fetchMediaDetails(
    request.params.mediaType,
    parseInt(request.params.id)
  );
  response.send(movieData);
  response.end();
});

export default router;
