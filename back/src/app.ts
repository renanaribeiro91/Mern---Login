import "dotenv/config";
import express from "express";
import { routes } from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connection } from "./db";
// import "./modules";
// import { logger } from "./utils/logger";

const app = express();
connection();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`server is run on PORT ${process.env.PORT}`);
});
