import mongoose from "mongoose";
class ConnectDatabase {
  connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
      console.log("Connect successful to mongodb");
    } catch (error) {
      console.error("error connect:", error.message);
      process.exit(1);
    }
  };
}
const mongoInstance = new ConnectDatabase();
export { mongoInstance };
