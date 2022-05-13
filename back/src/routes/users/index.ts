import { Router } from "express";
import {
  findAllUsersController,
  findOneUsersController,
  createUsersController,
  removeUsersController,
  updateUsersController
} from "../controller/user";

export const routes = Router();

routes.get("/hello", (req: Request, res: Response) => {
  return res.status(200).send({ msg: "Hello!" });
});

routes.get("/api", findAllUsersController);
routes.get("/api/details/:id", findOneUsersController);
routes.delete("/api/:id", removeUsersController);
routes.post("/api", createUsersController);
