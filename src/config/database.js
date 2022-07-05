import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // User ENV files

export const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_ROOT_USER,
  process.env.DB_ROOT_PWD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    port: process.env.DB_PORT,
  }
);
