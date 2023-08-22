import { cartdbPath, productdbPath } from "./db_path";
const fs = require("fs");
async function getCartDbData() {
  const jsonData = fs.readFileSync(cartdbPath, "utf-8");
  return await JSON.parse(jsonData);
}
async function getProductDbData() {
  const jsonData = fs.readFileSync(productdbPath, "utf-8");
  console.log(productdbPath);

  return await JSON.parse(jsonData);
}
export { getCartDbData, getProductDbData };
