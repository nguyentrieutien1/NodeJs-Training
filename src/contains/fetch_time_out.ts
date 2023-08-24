import dotenv from "dotenv";
dotenv.config();
const FETCH_TIME_OUT: number = parseInt(process.env.FETCH_TIME_OUT);
export { FETCH_TIME_OUT };
