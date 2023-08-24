const cartRouter = require("./cart.route");
const productRouter = require("./product.route");
const userRouter = require("./user.route");
const router = (app) => {
  app.use("/api/cart", cartRouter);
  app.use("/api/products", productRouter);
  app.use("/api", userRouter);
};
module.exports = router;
