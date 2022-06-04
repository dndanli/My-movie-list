import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import path from "path";
require("../configs/passport-config")(passport);

// --- api v1 routes
import popularRoutes from "../api/v1/routes/popular";
import trendingRoutes from "../api/v1/routes/trending";
import trailerRoutes from "../api/v1/routes/trailer";
import detailRoutes from "../api/v1/routes/detail";
import upcomingRoutes from "../api/v1/routes/upcoming";
import searchRoutes from "../api/v1/routes/search";
import personRoutes from "../api/v1/routes/person";
import topRatedRoutes from "../api/v1/routes/topRated";

// --- user feature routes
import userRoutes from "../user/routes/user";

import listRoutes from "../list/routes/list";

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET, POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// initialize passport object on every request.
app.use(passport.initialize());

app.use("/popular", popularRoutes);
app.use("/trending", trendingRoutes);
app.use("/getIdForTrailer", trailerRoutes);
app.use("/detail", detailRoutes);
app.use("/upcoming", upcomingRoutes);
app.use("/search", searchRoutes);
app.use("/person", personRoutes);
app.use("/topRated", topRatedRoutes);

app.use("/user", userRoutes);
app.use("/user/list", listRoutes);

app.use(express.static(path.join(__dirname, "../../../frontend", "build")));
app.use(express.static("public"));

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../../../frontend/build", "index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
