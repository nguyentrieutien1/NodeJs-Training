const express = require("express");
const { errorHandler } = require("./middlewares/error.middleware");
const app = express();
const {mongoDbInstance} = require("./configs/db")
const appRouters = require("./routes/index.route")
const cors = require("cors");
const PORT = process.env.PORT || 9000;
require("dotenv").config();

// CONNECTDB
mongoDbInstance.connect()

// MIDDLEWARES
app.use(express.json({}));
app.use(cors());


// RUN APP ROUTERS 
appRouters(app)


// CATCH APP ERROR
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`App is running on link http://localhost:${PORT}`);
})