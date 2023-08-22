const cartRouter = require("./cart.route")
const router = (app) => {
     app.use("/api", cartRouter);
}
export = router;