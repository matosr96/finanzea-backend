import { Schema } from "mongoose";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>(
  {
    uuid: { type: String, required: true, unique: true },
    name: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    photo: { type: String },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
