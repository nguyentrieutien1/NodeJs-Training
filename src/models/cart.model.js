const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
//Export the model
const Cart = mongoose.model("Cart", cartSchema);
module.exports = { Cart };
