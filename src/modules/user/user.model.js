const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: string,
    required: true,
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
});
//Export the model
const user = mongoose.model("user", userSchema);
module.exports = { user };
