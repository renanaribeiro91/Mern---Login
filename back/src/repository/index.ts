import userSchema from "../models";

export default {
  findAllUsers() {
    return userSchema.find();
  },

  findOneUsers(id: string) {
    return userSchema.findById(id);
  },

  createUsers(body) {
    return userSchema.create(body);
  },
};
