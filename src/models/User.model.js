import { DataTypes, Sequelize } from "sequelize";
import { connection } from "../config/database";

const sequelize = connection; // implement connection config

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email_verified_at: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile_verified_at: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activation_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mobile_token: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    register_ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    // Other model options go here
  }
);

console.log(User === sequelize.models.User);

await User.sync({ force: true });
console.log("The table for the User model was created!");
