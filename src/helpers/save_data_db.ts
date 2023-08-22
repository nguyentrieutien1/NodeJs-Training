import fs from "fs";
import { cartdbPath } from "./db_path";

function saveDbData(data) {
  fs.writeFileSync(cartdbPath, JSON.stringify(data, null, 2));
}

export { saveDbData };
