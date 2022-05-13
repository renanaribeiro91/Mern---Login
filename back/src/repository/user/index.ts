import userSchema from "../../models/user";

export const findAllUsers = async () => {
  return await userSchema.find();
};

export const findOneUsers = async (params) => {
  return await userSchema.findOne(params);
};

export const createUsers = async (body) => {
  return await userSchema.create(body);
};

export const updateUsers = async (body) => {
  return await userSchema.findOneAndUpdate(body);
};

export const removeUsers = async (params) => {
  return await userSchema.findByIdAndDelete(params);
};
