const fs = require("fs");
const {dbPath} = require("./db_path")
function saveDbData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
module.exports = {
  saveDbData,
};