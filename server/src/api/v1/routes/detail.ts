import express from "express";
import { fetchMediaDetails, fetchMovieContentRating } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /detail
 */

router.get("/getDetails/:mediaType/:id", async (request, response) => {
  let responseContent = [];

  const responseData = await fetchMediaDetails(
    request.params.mediaType,
    parseInt(request.params.id)
  );

  if (request.params.mediaType === "tv") {
    responseContent.push(responseData);
  }

  if (request.params.mediaType === "movie") {
    const movieContentRating = await fetchMovieContentRating(
      parseInt(request.params.id)
    );
    responseContent.push(responseData, movieContentRating);
  }
  response.send(responseContent);
  response.end();
});

export default router;
