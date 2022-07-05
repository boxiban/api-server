import express from "express";
import chalk from "chalk";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import ip from "ip";
import { orm } from "./config/orm";
import mainRouter from "./routes/router";

const app = express();
dotenv.config(); // implement config for load data from environment
const PORT = process.env.PORT; // use port fron env or 8080
app.use(express.json()); // use Express json response middleware
app.use(helmet()); // Use Helmet Middleware

// only use in development not in production
if (app.get("env") === "development") {
  app.use(morgan("tiny")); // use Morgan middleware for loging in terminal
}

orm; // Implement Data Base

app.use(express.static("public")); // set public folder for loading static files

app.get("/", (req, res) => {
  res.status(200).json({ message: "system ok" });
});

app.use("/", mainRouter); // Main Router file

// Return response for err or lunch app on browser
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.clear();
  console.log(
    `\n 👋  Boxiban is running at : ${chalk.green(
      `https://localhost:${PORT}`
    )} `,
    `\n \n 👉  runing on network     : ${chalk.green(ip.address())}`
  );
});
