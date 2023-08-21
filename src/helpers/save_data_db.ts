import fs from "fs";
import { dbPath } from "./db_path";

function saveDbData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export { saveDbData };
