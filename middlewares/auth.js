import { getUser } from "../services/auth.js";

async function restrictToLoggedInUserOnly(req, res, next) {
  const sessionId = req.cookies?.uid;
  if (!sessionId)
    res.redirect("/signin", {
      error: "You are not authenticated! Login first.",
    });
  const loggedInUser = getUser(sessionId);
  if (!loggedInUser)
    res.redirect("/signin", {
      error: "You are not authenticated! Login first.",
    });

  req.user = loggedInUser;
  next();
}

async function authGaurd(req, res, next) {
  const sessionId = req.cookies?.uid;
  const loggedInUser = getUser(sessionId);
  req.user = loggedInUser;
  next();
}

export { authGaurd, restrictToLoggedInUserOnly };
