import mongoose, { Schema, models, model } from "mongoose";

const OrderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  options: { type: Object },
});

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  items: { type: [OrderItemSchema], required: true },
  total: { type: Number, required: true },
  status: { type: String, enum: ["جدید", "در حال آماده‌سازی", "آماده ارسال", "ارسال شده", "تحویل شده", "لغو شده"], default: "جدید" },
  address: { type: String, required: true },
  phone: { type: String, required: true },
}, { timestamps: true });

export default models.Order || model("Order", OrderSchema); 