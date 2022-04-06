import express from "express";
import cors from "cors";

import popularRoutes from "../routes/popular";
import trendingRoutes from "../routes/trending";
import getMovieRoutes from "../routes/getMovie";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/popular", popularRoutes);
app.use("/trending", trendingRoutes);
app.use("/getMovie", getMovieRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
