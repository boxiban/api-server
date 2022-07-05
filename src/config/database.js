import { Sequelize } from "sequelize";
import { User } from "../models/User.model";

export const sequelize = new Sequelize(
  // process.env.DB_DATABASE,
  // process.env.DB_ROOT_USER,
  //  process.env.DB_ROOT_PWD,
  "boxiban",
  "root",
  "rootpassword",
  {
    host: "mysql",
    dialect: "mysql",
    port: "3306",
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

/* ---------------------------- Implement Models ---------------------------- */
User();




await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");
// `sequelize.define` also returns the model
// true
