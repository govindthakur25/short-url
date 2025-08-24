import express from "express";
import {
  handleGenerateShortUrl,
  handleGetShortUrl,
  handleGetAnalytics,
} from "../controllers/url.js";

const urlRouter = express.Router();

urlRouter.route("/").post(handleGenerateShortUrl);

urlRouter.route("/:shortId").get(handleGetShortUrl);

urlRouter.route("/:shortId/analytics").get(handleGetAnalytics);

export { urlRouter };
