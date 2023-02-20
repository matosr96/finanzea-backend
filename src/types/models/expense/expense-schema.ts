import { Schema } from "mongoose";
import { Expense } from "./expense";

export const ExpenseSchemaMongo = new Schema<Expense>(
  {
    uuid: { type: String, required: true, unique: true },
    user_email: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    support: { type: String },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
