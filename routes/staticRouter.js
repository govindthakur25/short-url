import express from "express";

const staticRouter = express.Router();

staticRouter.get("/", (req, res) => {
  res.render("home");
});

export { staticRouter };
