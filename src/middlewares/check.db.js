const fs = require("fs");
const { dbPath } = require("../helpers/db_path");
function checkDbFile(req, res, next) {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ products: [] }));
    console.log("Created new db.json file.");
  }
next();
}
module.exports = {
  checkDbFile,
};