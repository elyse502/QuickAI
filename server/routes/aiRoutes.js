import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post("/generate-article", auth, generateArticle);

export default aiRouter;
