import { Request, Response } from "express";
import {
  findAllUsers,
  findOneUsers,
  createUsers,
  removeUsers,
  updateUsers,
} from "../../repository/user";

export const findAllUsersController = async (req: Request, res: Response) => {
  try {
    const user = await findAllUsers();
    if (!user) {
      return res.status(401).send({ msg: "Nenhum usuário cadastrado" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao buscar" });
  }
};
export const findOneUsersController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await findOneUsers({ _id: id });
    if (!user) {
      return res.status(401).send({ msg: "Esse usuário não existe" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao buscar" });
  }
};
export const createUsersController = async (req: Request, res: Response) => {
  const { name, email, typeUser, password } = req.body;
  const data = { name, email, typeUser, password };

  try {
    let user = await findOneUsers({ email });
    if (user) {
      return res
        .status(401)
        .send({ msg: "Esse usuário ja existe", users: user });
    }

    const users = await createUsers(data);
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao criar usuário" });
  }
};

export const updateUsersController = async (req: Request, res: Response) => {
  const { _id, name, email, typeUser, password } = req.body;
  const data = { name, email, typeUser, password };
  try {
    const user = await updateUsers({ _id: id }, data, { new: true });
    if (!user) {
      return res.status(401).send({ msg: "Esse usuário não existe" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao atualizar" });
  }
};

export const removeUsersController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await removeUsers({ _id: id });
    if (!user) {
      return res.status(401).send({ msg: "Esse usuário não existe" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ Error: "Erro ao deletar" });
  }
};
