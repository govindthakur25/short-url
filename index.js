import express from "express";
import { connectMongoDB } from "./connect.js";
import { urlRouter } from "./routes/url.js";

const app = express();
const PORT = 8001;

await connectMongoDB("mongodb://127.0.0.1:27017/short-url");

app.use(express.json());
app.use("/api/url", urlRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
