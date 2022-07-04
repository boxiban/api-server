import express, { json } from "express";
import chalk from "chalk";

const app = express();
const PORT = process.env.port || 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "system ok" });
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(
    `👋 Server is running at ${chalk.green(`https://localhost:${PORT}`)} `
  );
});
