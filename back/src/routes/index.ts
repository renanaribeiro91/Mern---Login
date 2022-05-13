import { Router } from "express";
import { routesUser } from "./users";
import { routesProducts } from "./products";

export const routes = Router();

routes.use("/user", routesUser);
routes.use("/products", routesProducts);
