const { dbPath } = require("./db_path");
const fs = require("fs");
async function getDbData() {
  const jsonData = fs.readFileSync(dbPath, "utf-8");
  return await JSON.parse(jsonData);
}
export { getDbData };
