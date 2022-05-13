import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    typeUser: {
      type: Number,
      default: 1,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
