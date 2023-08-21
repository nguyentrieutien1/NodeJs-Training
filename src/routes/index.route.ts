const productRouter = require("./product.route")
const router = (app) => {
     app.use("/api", productRouter);
}
export = router;