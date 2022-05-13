import Productschema from "../models";

export const findAllProducts = async () => {
  return await Productschema.find();
};

export const findOneProducts = async (params) => {
  return await Productschema.findOne(params);
};

export const createProducts = async (body) => {
  return await Productschema.create(body);
};

export const updateProducts = async (body) => {
  return await Productschema.findOneAndUpdate(body);
};

export const removeProducts = async (params) => {
  return await Productschema.findByIdAndDelete(params);
};
