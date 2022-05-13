import { Router } from "express";
import {
  findAllUsersController,
  findOneUsersController,
  createUsersController,
  removeUsersController,
  updateUsersController,
} from "../../controller/user";

export const routesUser = Router();

routesUser.get("/hello", (req: Request, res: Response) => {
  return res.status(200).send({ msg: "Hello!" });
});

routesUser.get("/api", findAllUsersController);
routesUser.get("/api/details/:id", findOneUsersController);
routesUser.delete("/api/:id", removeUsersController);
routesUser.post("/api", createUsersController);
