const cartRouter = require("./cart.route");
const router = (app) => {
  app.use("/api", cartRouter);
};
module.exports = router;
