import express from "express";
import path from "path";
import { connectMongoDB } from "./connect.js";
import { urlRouter } from "./routes/url.js";
import { staticRouter } from "./routes/staticRouter.js";
const app = express();
const PORT = 8001;

await connectMongoDB("mongodb://127.0.0.1:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/url", urlRouter);
app.use("/", staticRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
