import MCQ from "../models/MCQ.js";
import Result from "../models/Result.js";

// Get Questions by Category
export const getQuestions = async (req, res) => {
  try {
    const { category } = req.params;

    const questions = await MCQ.find({ category }).select("-correctAnswer");

    res.status(200).json({
      success: true,
      total: questions.length,
      questions,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Submit Quiz
export const submitQuiz = async (req, res) => {
  try {

    const { category, answers } = req.body;

    const questions = await MCQ.find({ category });

    let score = 0;

    questions.forEach((question) => {
      const userAnswer = answers.find(
        (a) => a.questionId === question._id.toString()
      );

      if (
        userAnswer &&
        userAnswer.answer === question.correctAnswer
      ) {
        score++;
      }
    });

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    const result = await Result.create({
      user: req.user.id,
      category,
      score,
      totalQuestions: questions.length,
      percentage,
    });

    res.status(200).json({
      success: true,
      message: "Quiz Submitted Successfully",
      result,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Results
export const getResults = async (req, res) => {
  try {

    const results = await Result.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      results,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};