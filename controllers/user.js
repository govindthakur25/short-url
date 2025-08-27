import { User } from "../models/user.js";

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
  res.redirect("/");
}

export { handleUserSignup, handleUserSignin };
