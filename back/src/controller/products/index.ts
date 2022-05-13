import { Request, Response } from "express";
import {
  findAllProducts,
  findOneProducts,
  createProducts,
  removeProducts,
  updateProducts,
} from "../../repository";

export const findAllProductsController = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await findAllProducts();
    if (!product) {
      return res.status(401).send({ msg: "Nenhum produto cadastrado" });
    }
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao buscar" });
  }
};
export const findOneProductsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const product = await findOneProducts({ _id: id });
    if (!product) {
      return res.status(401).send({ msg: "Esse produto não existe" });
    }
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao buscar" });
  }
};
export const createProductsController = async (req: Request, res: Response) => {
  const { name, description, price, quantite } = req.body;
  const data = { name, description, price, quantite };

  try {
    const Products = await createProducts(data);
    return res.status(200).send(Products);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao criar produto" });
  }
};

export const updateProductsController = async (req: Request, res: Response) => {
  const { _id, name, description, price, quantite } = req.body;
  const data = { name, description, price, quantite };
  try {
    const product = await updateProducts({ _id: id }, data, { new: true });
    if (!product) {
      return res.status(401).send({ msg: "Esse produto não existe" });
    }
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao atualizar" });
  }
};

export const removeProductsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await removeProducts({ _id: id });
    if (!product) {
      return res.status(401).send({ msg: "Esse produto não existe" });
    }
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao deletar" });
  }
};
