const express = require("express");
const { errorHandler } = require("./middlewares/error.middleware");
const app = express();
const { checkDbFile } = require("./middlewares/check.db")
const appRouters = require("./routes/index.route")
const cors = require("cors");
const { mongoInstance } = require("./configs/db");
const PORT = process.env.PORT || 9000;
require("dotenv").config();
// MIDDLEWARES
app.use(checkDbFile);
app.use(express.json({}));
app.use(cors());
// CONNECT DB
mongoInstance.connect();

// RUN APP ROUTERS 
appRouters(app)


// CATCH APP ERROR
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`App is running on link http://localhost:${PORT}`);
})