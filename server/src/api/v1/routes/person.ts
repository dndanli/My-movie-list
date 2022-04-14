import express from "express";
import { fetchPerson } from "../helpers/helpers";
const router = express.Router();

/**
 * all routes start with /person
 */
router.get("/:id", async (request, response) => {
  response.send(await fetchPerson(request.params.id));
});

export default router;
