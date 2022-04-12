import express from "express";
import { fetchClientQuery } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /search
 */

router.post("/:query", async (request, response) => {
  const clientQuery = request.params.query;
  const searchResponse = await fetchClientQuery(clientQuery);
  response.send(searchResponse);
});

export default router;
