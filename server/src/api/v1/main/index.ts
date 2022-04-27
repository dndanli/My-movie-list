import express from "express";
import cors from "cors";

import popularRoutes from "../routes/popular";
import trendingRoutes from "../routes/trending";
import trailerRoutes from "../routes/trailer";
import detailRoutes from "../routes/detail";
import upcomingRoutes from "../routes/upcoming";
import searchRoutes from "../routes/search";
import personRoutes from "../routes/person";
import topRatedRoutes from "../routes/topRated";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/popular", popularRoutes);
app.use("/trending", trendingRoutes);
app.use("/getIdForTrailer", trailerRoutes);
app.use("/detail", detailRoutes);
app.use("/upcoming", upcomingRoutes);
app.use("/search", searchRoutes);
app.use("/person", personRoutes);
app.use("/topRated", topRatedRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
