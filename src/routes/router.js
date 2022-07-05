import express from "express";
import authRoutes from "./auth";

const mainRouter = express.Router();

mainRouter.use("/", authRoutes);

export default mainRouter;
