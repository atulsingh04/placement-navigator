import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Java", "DSA", "DBMS", "OS", "Aptitude"],
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length === 4,
        message: "Each question must have exactly 4 options.",
      },
    },

    correctAnswer: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MCQ", mcqSchema);