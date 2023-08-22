const fs = require("fs");
const { cartdbPath, productdbPath } = require("./db_path");
function saveDbData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
module.exports = {
  saveDbData,
};