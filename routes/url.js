import express from "express";
import {
  handleGenerateShortUrl,
  handleGetShortUrl,
} from "../controllers/url.js";

const urlRouter = express.Router();

urlRouter.route("/").post(handleGenerateShortUrl);

urlRouter.route("/:shortId").get(handleGetShortUrl);

export { urlRouter };
