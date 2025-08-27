import express from "express";
import { URL } from "../models/url.js";

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  const allDbUrls = await URL.find({});
  return res.render("home", { allDbUrls: allDbUrls });
});

staticRouter.get("/signup", async (req, res) => {
  return res.render("signup");
});

staticRouter.get("/signin", async (req, res) => {
  return res.render("signin");
});

export { staticRouter };
