import mongoose from "mongoose";
import bcrypt from "bcrypt";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 1,
    },
    quantite: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
