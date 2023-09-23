import { Sequelize } from "sequelize";
import data from "./config.js";

const sequelizeConnection = new Sequelize(
  data.development.database,
  data.development.username,
  data.development.password,
  {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  }
);

export default sequelizeConnection;
