import express, { query } from "express";
import {
  fetchClientQuery,
  fetchClientQueryMovies,
  fetchClientQueryTv,
  fetchClientQueryPeople,
} from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /search
 */

router.post("/:query", async (request, response) => {
  const clientQuery = request.params.query;
  const searchResponse = await fetchClientQuery(clientQuery);
  response.send(searchResponse);
});

router.post("/:page/:query/:queryType", async (request, response) => {
  const clientQuery: string = request.params.query;
  const pageNumber: number = parseInt(request.params.page);
  const queryType: string = request.params.queryType;

  let searchResponse;

  if (queryType === "movie") {
    searchResponse = await fetchClientQueryMovies(clientQuery, pageNumber);
  } else if (queryType === "tv") {
    searchResponse = await fetchClientQueryTv(clientQuery, pageNumber);
  } else if (queryType === "people") {
    searchResponse = await fetchClientQueryPeople(clientQuery, pageNumber);
  }
  response.send(searchResponse);
});

export default router;
