import { Schema } from "mongoose";
import { Category } from "./category";

export const CategorySchemaMongo = new Schema<Category>(
  {
    uuid: { type: String, required: true, unique: true },
    user_email: { type: String, required: true },
    name: { type: String,  required: true },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
