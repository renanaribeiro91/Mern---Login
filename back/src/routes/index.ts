import { Router } from "express";
import {
  findAllUsersController,
  findOneUsersController,
  createUsersController,
} from "../controller";

export const routes = Router();

routes.get("/hello", (req: Request, res: Response) => {
  return res.status(200).send({ msg: "Hello!" });
});
routes.get("/", findAllUsersController);
routes.get("/:id", findOneUsersController);
routes.post("/api", createUsersController);
