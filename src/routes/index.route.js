const cartRouter = require("./cart.route");
const productRouter = require("./product.route");
const router = (app) => {
  app.use("/api/cart", cartRouter);
  app.use("/api/products", productRouter);
};
module.exports = router;
