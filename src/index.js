import express from "express";
import chalk from "chalk";

const app = express();
const PORT = process.env.port || 8080;

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(
    `👋 Server is running at ${chalk.green(`https://localhost:${PORT}`)} `
  );
});
