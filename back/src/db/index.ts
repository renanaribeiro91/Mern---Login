import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.MONGOURLATLAS;
const config = { useNewUrlParser: true, useUnifiedTopology: true };

export const connection = async () => {
  try {
    await mongoose.connect(url, config);
    console.log("Database connected!");
  } catch (error) {
    console.log("Database not connected!" + error);
  }
};
