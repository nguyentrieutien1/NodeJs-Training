import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
//Export the model
const Cart = mongoose.model("Cart", cartSchema);
export { Cart };
