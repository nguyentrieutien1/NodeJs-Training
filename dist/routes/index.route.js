"use strict";
const productRouter = require("./product.route");
const router = (app) => {
    app.use("/api", productRouter);
};
module.exports = router;
