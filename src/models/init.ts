import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";

export const sequelizeConnection = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  }
);

const dbInit = async () => {
  sequelizeConnection.sync({ alter: true });
};

export default dbInit;
