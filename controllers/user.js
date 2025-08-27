import { v4 as uuidv4 } from "uuid";
import { User } from "../models/user.js";
import { setUser } from "../services/auth.js";

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.redirect("/");
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) res.render("/signin");
  const sessionId = uuidv4();

  // This is for the API
  setUser(sessionId, user);

  // This is for the client
  res.cookie("sessionId", sessionId);

  res.redirect("/");
}

export { handleUserSignup, handleUserSignin };
