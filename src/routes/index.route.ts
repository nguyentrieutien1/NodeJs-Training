const cartRouter = require("./cart.route")
const productRouter = require("./product.route");
const router = (app) => {
  app.use("/api", cartRouter);
  app.use("/api", productRouter);
};
export = router;