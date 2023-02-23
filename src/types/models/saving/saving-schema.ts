import { Schema } from "mongoose";
import { Saving } from "./saving";

export const SavingSchemaMongo = new Schema<Saving>(
  {
    uuid: { type: String, required: true, unique: true },
    user_email: { type: String, required: true },
    title: { type: String, required: true },
    amount_saved: { type: Number, required: true },
    goal: { type: Number, required: true },
    goal_date: { type: String, required: true },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
