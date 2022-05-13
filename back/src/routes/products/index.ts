import { Router } from "express";
import {
  findAllProductsController,
  findOneProductsController,
  createProductsController,
  removeProductsController,
  updateProductsController,
} from "../../controller/products";

export const routesProducts = Router();

routesProducts.get("/hello", (req: Request, res: Response) => {
  return res.status(200).send({ msg: "Hello!" });
});

routesProducts.get("/api", findAllProductsController);
routesProducts.get("/api/details/:id", findOneProductsController);
routesProducts.delete("/api/:id", removeProductsController);
routesProducts.post("/api", createProductsController);
