import { URL } from "../models/url.js";
import { nanoid } from "nanoid";

// POST: /api/url
async function handleGenerateShortUrl(req, res) {
  const shortId = nanoid(8);
  if (!req.body.redirectUrl) {
    return res.status(400).json({ message: "Redirect URL is required" });
  }
  const redirectUrl = req.body.redirectUrl;
  const result = await URL.create({
    shortId: shortId,
    redirectUrl: redirectUrl,
    visitHistory: [],
  });
  res.status(201).json({ message: "Successful", shortUrl: shortId });
}
// GET: /api/url/:shortId
async function handleGetShortUrl(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(result.redirectUrl);
}

// GET: /api/url/:shortId/analytics
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  res.status(200).json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handleGenerateShortUrl, handleGetShortUrl, handleGetAnalytics };
