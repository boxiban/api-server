import { User } from "../models/User.model";
import { connection } from "../config/database";

export const orm = connection;

try {
  await orm.authenticate();
  console.log("\n Connection has been established successfully. 🔥");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

/* ---------------------------- Implement Models ---------------------------- */
User;
