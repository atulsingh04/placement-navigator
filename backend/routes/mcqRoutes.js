import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getQuestions,
  submitQuiz,
  getResults,
} from "../controllers/mcqController.js";

const router = express.Router();

// Get Questions
router.get(
  "/:category",
  authMiddleware,
  getQuestions
);

// Submit Quiz
router.post(
  "/submit",
  authMiddleware,
  submitQuiz
);

// User Results
router.get(
  "/results",
  authMiddleware,
  getResults
);

export default router;