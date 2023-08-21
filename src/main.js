const express = require("express");
const { errorHandler } = require("./middlewares/error.middleware");
const app = express();
const { checkDbFile } = require("./middlewares/check.db")
const appRouters = require("./routes/index.route")
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 9000;
// MIDDLEWARES
app.use(checkDbFile);
app.use(express.json({}));
app.use(cors());
// RUN ROUTERS 
appRouters(app)
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`App is running on link http://localhost:${PORT}`);
})