import sequelizeConnection from "../config/connectDb.js";
// import User from "./user";

const dbInit = async () => {
  // await User.sync();
  sequelizeConnection.sync({ alter: true });
};
export default dbInit;
