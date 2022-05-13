import userSchema from "../models";

export const findAllUsers = async () => {
  return await userSchema.find();
};

export const findOneUsers = async () => {
  return await userSchema.findById(id);
};

export const createUsers = async (body) => {
  return await userSchema.create(body);
};
