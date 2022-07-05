import express from "express";

const route = express.Router();

route.get("/api/v1/login", (req, res) => {
  res.status(200).json({ login: "page" });
});

route.get("/api/v1/signup", (req, res) => {
  res.status(200).json({ login: "signup" });
});

route.get("/api/v1/forgot-password", (req, res) => {
  res.status(200).json({ login: "password" });
});

route.get("/api/v1/activation-email", (req, res) => {
  res.status(200).json({ login: "email-active" });
});

export default route;
