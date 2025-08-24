import mongoose from "mongoose";

async function connectMongoDB(url) {
  mongoose
    .connect(url)
    .then(() => console.log("Mongo DB connected!"))
    .catch((err) => console.error("Connection error", err));
}

export { connectMongoDB };
