import { Request, Response } from "express";
import { findAllUsers, findOneUsers, createUsers } from "../repository";

export const findAllUsersController = async (req: Request, res: Response) => {
  try {
    const user = await findAllUsers();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send({ Error: "Erro ao buscar" });
  }
};
export const findOneUsersController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await findOneUsers({ _id: id });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send({ Error: "Erro ao buscar" });
  }
};
export const createUsersController = async (req: Request, res: Response) => {
  const { name, email, typeUser, password } = req.body;
  try {
    let data = {};
    let user = await findOneUsers({ email });
    if (user) {
      res.status(200).send({ msg: "Esse usuário ja existe" });
      return user;
    }
    data = { name, email, typeUser, password };
    user = await createUsers(dara);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send({ Error: "Erro ao criar usuário" });
  }
};
