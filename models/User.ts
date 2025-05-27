import mongoose, { Schema, models, model } from "mongoose";

const AddressSchema = new Schema({
  title: { type: String },
  address: { type: String },
  phone: { type: String },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "customer", "staff", "delivery_person"], default: "customer" },
  addresses: { type: [AddressSchema], default: [] },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default models.User || model("User", UserSchema); 